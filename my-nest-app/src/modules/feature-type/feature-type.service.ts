import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FeatureType } from '../../models/featureType.model';
import { CreateFeatureInput } from '../../dto 🚀/featureType.dto/create-feature.dto';
import { FeatureTypeOutput } from 'src/dto 🚀/featureType.dto/output-feature.dto';

@Injectable()
export class FeatureTypeService {
  constructor(
    @InjectModel(FeatureType)
    private readonly featureTypeModel: typeof FeatureType,
  ) {}

  async createFeatureType(
    input: CreateFeatureInput,
  ): Promise<FeatureTypeOutput> {
    try {
      const existingFeature = await this.featureTypeModel.findOne({
        where: { type: input.type },
      });

      if (existingFeature) {
        throw new ConflictException('Feature type already exists');
      }

      const feature = await this.featureTypeModel.create({ type: input.type });

      return feature.get({ plain: true });
    } catch (error) {
      throw new InternalServerErrorException('Failed to create feature type');
    }
  }

  async getFeatureTypes(): Promise<FeatureTypeOutput[]> {
    const featureTypes = await this.featureTypeModel.findAll({
      //   attributes: ['id', 'type', 'status', 'createdAt', 'updatedAt'],
      raw: true,
    });

    return featureTypes as FeatureTypeOutput[];
  }
}
