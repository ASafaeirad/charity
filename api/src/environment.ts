import { getRequiredEnv, toInteger } from '@fullstacksjs/toolbox';
import dotenv from 'dotenv';

dotenv.config();

type EnvKeys = 'API_PORT';

export interface Config {
  port: number;
}

export const getConfig = (): Config => ({
  port: toInteger(getRequiredEnv<EnvKeys>('API_PORT')),
});
