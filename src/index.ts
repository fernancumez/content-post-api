import { App } from "./app";
import { config } from "dotenv";

process.env.NODE_ENV !== "production" ? config() : "";

const main = async () => {
  try {
    const app = new App(3000);

    await app.listen();
  } catch (err) {
    console.error(err);
  }
};

main();
