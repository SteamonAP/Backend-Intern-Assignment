import express from 'express';
import { bookingAct, getBookings } from '../controllers/booking.controller.js';
import {protectRoute} from "../middlewares/auth.middleware.js";

const router = express.Router();


router.post("/booking" , protectRoute , bookingAct);
router.get("/mybooking" , protectRoute , getBookings );


export default router;