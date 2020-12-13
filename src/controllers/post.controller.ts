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

    const newUser = getRepository(Post).create(data);
    const result = await getRepository(Post).save(newUser);

    return res.status(200).json({ message: "Post successfully saved", result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
