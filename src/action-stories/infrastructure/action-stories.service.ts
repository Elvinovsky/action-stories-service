import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from '../dto/create-history.dto';
import { HistoryCreate } from '../entities/history.entity';
import { InjectModel } from '@nestjs/sequelize';
import { historyToActivityMapper } from './history.mapper';
import {
  getPageNumber,
  getPagesCount,
  getPageSize,
  getSkip,
} from '../../pagination/pagination.utils';
import { PaginatorType } from '../../pagination/pagination.dto';
import { ActivityHistoryView } from '../dto/history-view.dto';

@Injectable()
export class ActionStoriesService {
  constructor(
    @InjectModel(HistoryCreate)
    private storiesModel: typeof HistoryCreate,
  ) {}

  async createActionCreate(inputData: CreateHistoryDto): Promise<void> {
    const actionCreateBuild = {
      userId: inputData.id,
      fullName: inputData.fullName,
      age: inputData.age,
      createdAt: new Date(),
    };

    await this.storiesModel.create(actionCreateBuild);
  }

  async getSortedAll(
    pageNumber: number,
    pageSize: number,
  ): Promise<PaginatorType<ActivityHistoryView[]>> {
    try {
      const actionStories = await this.storiesModel.findAndCountAll({
        limit: getPageSize(pageSize), // Ограничение на количество записей
        offset: getSkip(pageNumber, pageSize), // Смещение (количество записей, которые нужно пропустить)
      });

      return {
        pagesCount: getPagesCount(actionStories.count, pageSize),
        page: getPageNumber(pageNumber),
        pageSize: getPageSize(pageSize),
        totalCount: actionStories.count,
        items: await historyToActivityMapper(actionStories.rows),
      };
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  async getSortedByUserId(
    pageNumber: number,
    pageSize: number,
    userId: string,
  ): Promise<PaginatorType<ActivityHistoryView[]>> {
    const actionStories = await this.storiesModel.findAndCountAll({
      where: { userId: userId },
      limit: getPageSize(pageSize), // Ограничение на количество записей
      offset: getSkip(pageNumber, pageSize), // Смещение (количество записей, которые нужно пропустить)
    });

    return {
      pagesCount: getPagesCount(actionStories.count, pageSize),
      page: getPageNumber(pageNumber),
      pageSize: getPageSize(pageSize),
      totalCount: actionStories.count,
      items: await historyToActivityMapper(actionStories.rows),
    };
  }
}
