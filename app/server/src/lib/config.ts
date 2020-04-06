import { config as configDotenv } from 'dotenv';
import { resolve } from 'path';

switch (process.env.NODE_ENV) {
  case 'development':
    console.log('in dev environment');
    configDotenv({
      path: resolve(__dirname, '../env/.env.development'),
    });
    break;
  case 'test':
    console.log('in test environment');
    configDotenv({
      path: resolve(__dirname, '../env/.env.test'),
    });
    break;
  case 'production':
    console.log('in prod environment');
    configDotenv({
      path: resolve(__dirname, '../env/.env'),
    });
    break;
  default:
    throw new Error(`'PROCESS NODE_ENV ${process.env.NODE_ENV} NOT HANDLED`);
}

const throwErrorIfNoEnv = <T, K extends keyof T>(obj: Partial<T>, prop: K, msg?: string): T[K] => {
  if (obj[prop] === undefined || obj[prop] === null) {
    throw new Error(msg || `Missing environment variable ${prop}`);
  } else {
    return obj[prop] as T[K];
  }
};

const VARIABLES = ['MONGO_DB'];

//TODO: Change this if you add more environment variables to this
/**
 * VARIABLES.forEach(var=>{
 * throwErrorIfNoEnv(process.env, var);
 * })
 */
throwErrorIfNoEnv(process.env, VARIABLES[0]);

export interface Env {
  MONGO_DB: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends Env {}
  }
}
