import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export type PaginatorType<T> = {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: T;
};

export class QueryInputModel {
  @IsOptional()
  @Transform(({ value }) => (Number(value) > 0 ? Number(value) : 1))
  pageNumber = 1;

  @IsOptional()
  @Transform(({ value }) => (Number(value) > 0 ? Number(value) : 10))
  pageSize = 10;
}
