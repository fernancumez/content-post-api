import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

export class App {
  app: Application;

  constructor(private port?: number | string | undefined) {
    this.app = express();
    this.settings();
    this.middlewares();
  }

  settings() {
    this.app.set("port", process.env.PORT || this.port || 4000);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  async listen(): Promise<void> {
    try {
      await this.app.listen(this.app.get("port"));
      console.log(`Server on port ${this.app.get("port")}`);
    } catch (err) {
      console.error(err);
    }
  }
}
