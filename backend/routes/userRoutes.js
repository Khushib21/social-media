import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();
//login or signup
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
