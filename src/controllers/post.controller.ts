import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

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

    return res
      .status(200)
      .json({ message: "User created successfully", result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
