import * as process from 'process';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const getConfiguration = () => ({
  PORT: process.env.PORT,
  LOCALE_OPTIONS: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'sa',
    database: 'postgres',
    synchronize: true,
    autoLoadModels: true,
  } as SequelizeModuleOptions,
  REMOTE_OPTIONS: {
    uri: 'postgres://Elvinovsky:nXHKtfSpU1g3@ep-hidden-wood-23954592.us-east-2.aws.neon.tech/neondb',
    autoLoadEntities: true,
    synchronize: true,
  } as SequelizeModuleOptions,
});

export type ConfigType = ReturnType<typeof getConfiguration>;
