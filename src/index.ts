import { App } from "./app";

const main = async () => {
  try {
    const app = new App();

    await app.listen();
  } catch (err) {
    console.error(err);
  }
};

main();
