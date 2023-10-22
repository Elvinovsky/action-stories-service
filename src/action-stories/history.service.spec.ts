import { Test, TestingModule } from '@nestjs/testing';
import { ActionStoriesService } from './infrastructure/action-stories.service';

describe('HistoryService', () => {
  let service: ActionStoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActionStoriesService],
    }).compile();

    service = module.get<ActionStoriesService>(ActionStoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
