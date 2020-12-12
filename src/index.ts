import app from "./app";
import { createConnection } from "typeorm";
import "reflect-metadata";

const main = async () => {
  try {
    // create typeorm connections
    await createConnection();

    // Server init
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
  } catch (err) {
    console.error(err);
  }
};

main();
