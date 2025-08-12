import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import csrf from "csurf";
import logger from "./src/config/logger.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import helmet from "helmet";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use((req, res, next) => {
  logger.info(`Recieved ${req.method} request to ${req.url}`);
  if (req.body) {
    const { password, ...bodyToLog } = req.body;
    logger.info(`Request body: ${JSON.stringify(bodyToLog)}`);
  }
  next();
});

import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.route.js";
import activityRoutes from "./src/routes/activity.route.js";
import bookingRoutes from "./src/routes/booking.route.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(" Activity Booking API is live!");
});

app.use("/api/auth", authRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/bookmyactivity", bookingRoutes);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
});

process.on("unhandledRejection", (reason, promise) => {
  logger.error(
    `Unhandled Rejection at: ${promise} reason: ${
      typeof reason === "object" ? JSON.stringify(reason) : String(reason)
    }`
  );
});
