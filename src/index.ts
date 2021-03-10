import "reflect-metadata";
import app from "./app";
import { createTypeormConn } from "./utils/createTypeormConn";

const main = async () => {
  try {
    // create typeorm connections
    await createTypeormConn();
    console.log("Database is connected!");

    // Server init
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
  } catch (err) {
    console.error(err);
  }
};

main();
