import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'feature_types',
  timestamps: true,
})
export class FeatureType extends Model {
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
    unique: 'unique_type',
  })
  type: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  // @HasMany(() => Device)
  // devices: Device[];

  // @ForeignKey(() => FeatureType)
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false,
  // })
  // featureTypeId: number;

  // @BelongsTo(() => FeatureType)
  // featureType: FeatureType;
}
