import { Router } from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.controller";

const router: Router = Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

export default router;
