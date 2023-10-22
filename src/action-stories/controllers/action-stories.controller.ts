import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { ActionStoriesService } from '../infrastructure/action-stories.service';
import { CreateHistoryDto } from '../dto/create-history.dto';
import { QueryInputModel } from '../../pagination/pagination.dto';

@Controller('history')
export class ActionStoriesController {
  constructor(private readonly historyService: ActionStoriesService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  async create(@Payload() inputModel: CreateHistoryDto) {
    console.log(inputModel);
    await this.historyService.createActionCreate(inputModel);
    return true;
  }

  @Get() getSorted(@Query() query: QueryInputModel) {
    return this.historyService.getSortedAll(query.pageNumber, query.pageSize);
  }

  @Get(':id')
  getSortedById(@Query() query: QueryInputModel, @Param('id') id: string) {
    return this.historyService.getSortedByUserId(
      query.pageNumber,
      query.pageSize,
      id,
    );
  }
}
