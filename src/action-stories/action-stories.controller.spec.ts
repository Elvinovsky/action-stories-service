import { Test, TestingModule } from '@nestjs/testing';
import { ActionStoriesController } from './controllers/action-stories.controller';
import { ActionStoriesService } from './infrastructure/action-stories.service';

describe('HistoryController', () => {
  let controller: ActionStoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActionStoriesController],
      providers: [ActionStoriesService],
    }).compile();

    controller = module.get<ActionStoriesController>(ActionStoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
