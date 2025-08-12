import mongoose from "mongoose";
import  logger  from "./logger.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    logger.info(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    logger.info("Database connection error:", error);
  }
};
