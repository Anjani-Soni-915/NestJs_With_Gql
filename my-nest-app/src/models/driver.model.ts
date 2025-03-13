import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Device } from './device.model';

@Table({
  tableName: 'driver',
  timestamps: true,
})
export class Driver extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: 'unique_driverType',
  })
  driverType: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  // Association
  @HasMany(() => Device)
  devices: Device[];
}
