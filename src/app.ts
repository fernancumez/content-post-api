import express, { Express } from "express";
import postRoutes from "./routes/post.routes";
import { Config } from "./config";
import morgan from "morgan";
import cors from "cors";

// Initializations
const app: Express = express();
const { PORT } = Config;

//Settings
app.set("port", PORT);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// Routes
app.use("/api/posts", postRoutes);

export default app;
