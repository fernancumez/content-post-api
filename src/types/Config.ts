export interface IConfig {
  PORT: string | number | undefined;
  NODE_ENV: string | undefined;
  MYSQL: IDBConfig;
}

interface IDBConfig {
  TYPEORM_CONNECTION: string | undefined;
  TYPEORM_HOST: string | undefined;
  TYPEORM_USERNAME: string | undefined;
  TYPEORM_PASSWORD: string | undefined;
  TYPEORM_DATABASE: string | undefined;
  TYPEORM_PORT: string | number | undefined;
  TYPEORM_SYNCHRONIZE: boolean | string | undefined;
  TYPEORM_LOGGING: boolean | string | undefined;
  TYPEORM_ENTITIES: string | undefined;
}
