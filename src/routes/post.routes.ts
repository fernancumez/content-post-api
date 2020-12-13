import { Router } from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
} from "../controllers/post.controller";

const router: Router = Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).put(updatePost);

export default router;
