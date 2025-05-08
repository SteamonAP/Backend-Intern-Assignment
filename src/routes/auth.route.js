import express from "express";
import { login,logout,signup,checkAuth } from "../controllers/auth.controller.js"
import {protectRoute} from "../middlewares/auth.middleware.js";
import { signupValidator, loginValidator } from "../validators/auth.validator.js";
import { validateRequest } from "../middlewares/validateRequest.js"

const router = express.Router();

router.post("/signup",signupValidator,validateRequest,signup);

router.post("/login",loginValidator,validateRequest,login);

router.post("/logout",logout);



export default router;
