import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { FeatureType } from './featureType.model';
import { Driver } from './driver.model';

@Table({
  tableName: 'device',
  timestamps: true,
})
export class Device extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  declare id: number;

  @ForeignKey(() => FeatureType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  featureTypeId: number;

  @ForeignKey(() => Driver)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  driverId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  brand: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  deviceVersion: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  // @HasMany(() => Device)
  // devices: Device[];

  // @BelongsTo(() => FeatureType)
  // featureType: FeatureType;
}
