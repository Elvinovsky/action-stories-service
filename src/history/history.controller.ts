import { Controller, Post, Put } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  create(@Payload() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
  }

  @MessagePattern('findAllHistory')
  findAll() {
    return this.historyService.findAll();
  }

  @MessagePattern('findOneHistory')
  findOne(@Payload() id: number) {
    return this.historyService.findOne(id);
  }

  @Put()
  update(@Payload() updateHistoryDto: UpdateHistoryDto) {
    return this.historyService.update(updateHistoryDto);
  }
}
