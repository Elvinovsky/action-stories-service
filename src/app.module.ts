// this module should be first line of app.module.ts
import { configModule } from './action-stories/infrastructure/configuration/config-module';
import { Module } from '@nestjs/common';
import { ActionStoriesModule } from './action-stories/action-stories.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    configModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'sa',
      database: 'postgres',
      synchronize: true,
      autoLoadModels: true,
    }),
    ActionStoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
