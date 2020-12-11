import { App } from "./app";
import { config } from "dotenv";
import { createConnection } from "typeorm";
import "reflect-metadata";

process.env.NODE_ENV !== "production" ? config() : "";

const main = async () => {
  try {
    const app = new App(3000);

    // create typeorm connections
    await createConnection();
    await app.listen();
  } catch (err) {
    console.error(err);
  }
};

main();
