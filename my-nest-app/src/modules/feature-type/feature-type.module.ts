import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeatureType } from '../../models/featureType.model';
import { FeatureTypeService } from './feature-type.service';
import { FeatureTypeResolver } from './feature-type.resolver';

@Module({
  imports: [SequelizeModule.forFeature([FeatureType])],
  providers: [FeatureTypeService, FeatureTypeResolver],
  exports: [FeatureTypeService],
})
export class FeatureTypeModule {}
