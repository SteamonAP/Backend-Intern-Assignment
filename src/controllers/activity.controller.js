import { generateToken } from "../config/utils.js";
import User from "../models/user.model.js";
import Activity from "../models/activity.model.js";
import logger from "../config/logger.js";



export const activityLists = async(req,res) =>{
    try {
        const activities = await Activity.find({})
            .select('-__v -createdAt -updatedAt')
            .sort({date : 1});
        res.status(200).json(activities);
    } catch (error) {
        logger.error("Error in activity cont' ",error.message);
        res.status(500).json({message : "Error fetching Actvities"});
    }
};

export const activityListsById = async(req,res) => {
    try {
        const activitiy = await Activity.findById({_id : req.params.id})
            .select('-__v -createdAt -updatedAt');

        if(!activitiy){
            return res.status(404).json({message : "Activity not found"});
        }
        res.status(200).json(activitiy);            
    } catch (error) {
        logger.error("Error in activity cont' ",error.message);
        res.status(500).json({message: "Error fetching Activity"});
    }
}