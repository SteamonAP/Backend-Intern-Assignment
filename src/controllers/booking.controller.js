import Booking from "../models/booking.model.js";
import Activity from "../models/activity.model.js";
import logger from "../config/logger.js";

export const bookingAct = async (req, res) => {
  try {
    const { activityId } = req.body;
    const user = req.user._id;

    const activity = await Activity.findById(activityId).select(
      "-__v -createdAt -updatedAt"
    );

    if (!activity) {
      return res.status(404).json({ message: "No such activity found!" });
    }

    const isalreadyBooked = await Booking.findOne({
      user,
      activity: activityId,
    });

    if (isalreadyBooked) {
      return res
        .status(400)
        .json({ message: "You have already booked this activity!" });
    }

    const booking = new Booking({
      user,
      activity: activityId,
    });
    await booking.save();

    await booking.populate("activity", "-__v -createdAt -updatedAt");
    res
      .status(201)
      .json({
        message: "You have successfully booked this activity!",
        booking,
      });
  } catch (error) {
    logger.error("Error in bookingAct", error.message);
    res.status(500).json({ message: "Error in booking an activity" });
  }
};

export const getBookings = async (req, res) => {
  try {
    const user = req.user._id;

    const bookings = await Booking.find({ user })
      .select("-__v -createdAt -updatedAt")
      .populate("activity", "-__v -createdAt -updatedAt");
      
    if(!bookings || bookings.length === 0){
        return res.status(404).json({message:"No bookings done yet !"});
    }
      


    res.status(200).json(bookings);
  } catch (error) {
    logger.error("Error getting Bookings: ", error.message);
    res.status(500).json({ message: "Error fetching bookings" });
  }
};
