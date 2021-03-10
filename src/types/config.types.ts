export interface IConfig {
  PORT: string | number;
  NODE_ENV: string;
  DATABASE: IDatabaseConfig;
}

interface IDatabaseConfig {
  NAME: string;
  USERNAME: string;
  PASSWORD: string;
}
