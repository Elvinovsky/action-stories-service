import { Module } from '@nestjs/common';
import { ActionStoriesModule } from './action-stories/action-stories.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
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
