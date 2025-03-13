import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FeatureType } from '../../models/featureType.model';
import {
  CreateFeatureInput,
  UpdateFeatureInput,
} from '../../dto 🚀/featureType.dto/input-feature.dto';
import {
  FeatureTypeOutput,
  FeatureTypeResponse,
} from 'src/dto 🚀/featureType.dto/output-feature.dto';

@Injectable()
export class FeatureTypeService {
  constructor(
    @InjectModel(FeatureType)
    private readonly featureTypeModel: typeof FeatureType,
  ) {}

  // Post data
  async createFeatureType(
    input: CreateFeatureInput,
  ): Promise<FeatureTypeOutput> {
    const existingFeature = await this.featureTypeModel.findOne({
      where: { type: input.type },
    });

    if (existingFeature) {
      throw new ConflictException('Feature type already exists');
    }

    const feature = await this.featureTypeModel.create({ ...input });

    return feature.get({ plain: true });
  }

  // Update data
  async updateFeatureType(
    id: number,
    input: UpdateFeatureInput,
  ): Promise<FeatureTypeOutput> {
    if (!id) {
      throw new ConflictException(`Feature type ID is required`);
    }

    const featureTypeData = await this.featureTypeModel.findByPk(id, {
      raw: true,
    });

    if (!featureTypeData) {
      throw new NotFoundException(`Feature type with ID ${id} not found`);
    }

    await this.featureTypeModel.update(input, {
      where: { id },
    });

    const updatedFeature = await this.featureTypeModel.findByPk(id, {
      raw: true,
    });

    return updatedFeature as FeatureTypeOutput;
  }

  //delete data
  async deleteFeatureType(id: number): Promise<FeatureTypeOutput> {
    if (!id) {
      throw new ConflictException('ID is required');
    }

    const data = await this.featureTypeModel.findByPk(id);
    if (!data) {
      throw new NotFoundException(`Feature type with ID ${id} not found`);
    }
    await this.featureTypeModel.update({ status: false }, { where: { id } });

    const result = await this.featureTypeModel.findByPk(id, { raw: true });

    return result as FeatureTypeOutput;
  }

  // Get All
  async getFeatureTypes(): Promise<FeatureTypeResponse> {
    const { rows, count } = await this.featureTypeModel.findAndCountAll({
      where: { status: true },
      raw: true,
    });

    if (rows.length === 0) {
      throw new NotFoundException('Data not found');
    }

    return { count: count, data: rows as FeatureTypeOutput[] };
  }

  // get by id
  async getById(id: number): Promise<FeatureTypeOutput> {
    const result = await this.featureTypeModel.findByPk(id, { raw: true });

    if (!result) {
      throw new NotFoundException(`Feature type with ID ${id} not found`);
    }

    return result;
  }
}
