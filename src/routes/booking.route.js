import express from "express";
import {
  bookingAct,
  cancelBooking,
  getBookings,
} from "../controllers/booking.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/booking", protectRoute, bookingAct);
router.get("/mybooking", protectRoute, getBookings);
router.delete("/cancelbooking", protectRoute, cancelBooking);

export default router;
