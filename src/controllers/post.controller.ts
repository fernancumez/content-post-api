import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

// Find post
export const getPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    const result = await getRepository(Post).findOne(id);
    if (!result) return res.status(400).json({ message: "User not found" });

    return res.status(200).json({ message: "Successful operation", result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

// Get all posts
export const getPosts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const result = await getRepository(Post).find();

    return res.status(200).json({ message: "Successful operation", result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

// Create new post
export const createPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, description, image_url } = req.body as Pick<
      Post,
      "title" | "description" | "image_url"
    >;

    const data = { title, description, image_url };

    const newPost = getRepository(Post).create(data);
    const result = await getRepository(Post).save(newPost);

    return res.status(200).json({ message: "Post successfully saved", result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

//Update post
export const updatePost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    const { title, description, image_url } = req.body as Pick<
      Post,
      "title" | "description" | "image_url"
    >;

    const data = { title, description, image_url };

    const post = await getRepository(Post).findOne(id);
    if (!post) return res.status(400).json({ message: "Post not found" });

    getRepository(Post).merge(post, data);
    const result = await getRepository(Post).save(post);

    return res
      .status(200)
      .json({ message: "Post successfully updated", result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

// Delete post
export const deletePost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    const post = await getRepository(Post).findOne(id);
    if (!post) return res.status(400).json({ message: "User not found" });

    const result = await getRepository(Post).delete(id);
    return res.status(200).json({ message: "Post Successful deleted", result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
