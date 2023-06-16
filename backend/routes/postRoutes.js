import express from "express";
import { createPost } from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
//post by the user
router.route("/create").post(protect, createPost);

export default router;
