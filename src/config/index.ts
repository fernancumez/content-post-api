import { IConfig } from "../types/Config";
import { config } from "dotenv";

process.env.NODE_ENV !== "production" ? config() : "";

const Config: IConfig = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MYSQL: {
    TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION,
    TYPEORM_HOST: process.env.TYPEORM_HOST,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
    TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
    TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
    TYPEORM_ENTITIES: process.env.TYPEORM_ENTITIES,
    TYPEORM_SYNCHRONIZE: process.env.TYPEORM_SYNCHRONIZE,
    TYPEORM_LOGGING: process.env.TYPEORM_LOGGING,
  },
};

export { Config };
