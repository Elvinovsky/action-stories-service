import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

@Table({ timestamps: false })
export class HistoryCreate extends Model {
  @PrimaryKey
  @Column({ defaultValue: UUIDV4 })
  id: string;

  @Column({ type: DataType.UUID })
  userId: string;

  @Column({ type: DataType.STRING })
  fullName: string;

  @Column({ type: DataType.INTEGER })
  age: number;

  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;
}
