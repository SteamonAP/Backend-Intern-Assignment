import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import csrf from "csurf";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.route.js";
import activityRoutes from "./src/routes/activity.route.js";
import bookingRoutes from "./src/routes/booking.route.js";

dotenv.config();
const PORT = process.env.PORT || 3000;


app.use("/api/auth",authRoutes);
app.use("/api/activity",activityRoutes);
app.use("/api/bookmyactivity",bookingRoutes);



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
