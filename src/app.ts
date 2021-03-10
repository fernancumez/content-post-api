import express, { Application } from "express";
import postRoutes from "./routes/post.routes";
import config from "./config";
import cors from "cors";

// Initializations
const app: Application = express();

//Settings

app.set("port", config.PORT);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/posts", postRoutes);

export default app;
