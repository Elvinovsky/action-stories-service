import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateHistoryDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
