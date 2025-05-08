import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import csrf from "csurf";

const app = express();
app.use(express.json());
app.use(cookieParser());

import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.route.js";

dotenv.config();
const PORT = process.env.PORT;


app.use("/api/auth",authRoutes);




connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
