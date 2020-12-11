import { App } from "./app";
import { createConnection } from "typeorm";
import { Config } from "./config";
import "reflect-metadata";

const main = async () => {
  try {
    const { PORT } = Config;

    const app = new App(PORT);

    // create typeorm connections
    await createConnection();
    await app.listen();
  } catch (err) {
    console.error(err);
  }
};

main();
