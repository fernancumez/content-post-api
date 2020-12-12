import { Router } from "express";
import { createPost } from "../controllers/post.controller";

const router = Router();

router.route("/").post(createPost);

export default router;
