import { Module } from '@nestjs/common';
import { ActionStoriesService } from './infrastructure/action-stories.service';
import { ActionStoriesController } from './controllers/action-stories.controller';
import { HistoryCreate } from './entities/history.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([HistoryCreate])],
  controllers: [ActionStoriesController],
  providers: [ActionStoriesService],
  exports: [ActionStoriesService],
})
export class ActionStoriesModule {}
