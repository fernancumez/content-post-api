import express, { Express } from "express";
import postRoutes from "./routes/post.routes";
import config from "./config";
import morgan from "morgan";
import cors from "cors";

// Initializations
const app: Express = express();

//Settings
app.set("port", config.PORT);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/posts", postRoutes);

export default app;
