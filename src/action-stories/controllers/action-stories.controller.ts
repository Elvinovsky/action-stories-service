import { Controller, Get, Post, Query } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ActionStoriesService } from '../infrastructure/action-stories.service';
import { CreateHistoryDto } from '../dto/create-history.dto';
import { QueryInputModel } from '../../pagination/pagination.dto';

@Controller('history')
export class ActionStoriesController {
  constructor(private readonly historyService: ActionStoriesService) {}

  @Post('create')
  async create(@Payload() inputModel: CreateHistoryDto) {
    console.log(inputModel);
    await this.historyService.createActionCreate(inputModel);
  }

  @Get()
  findAll(
    @Query()
    query: QueryInputModel,
  ) {
    return this.historyService.findAll(query.pageNumber, query.pageSize);
  }

  @MessagePattern('findOneHistory')
  findOne(@Payload() id: number) {
    return this.historyService.findOne(id);
  }
}
