import { Resolver, Mutation, Query, Args, Int } from '@nestjs/graphql';
import { FeatureTypeService } from './feature-type.service';
import {
  FeatureTypeOutput,
  FeatureTypeResponse,
} from '../../dto 🚀/featureType.dto/output-feature.dto';
import {
  CreateFeatureInput,
  UpdateFeatureInput,
} from '../../dto 🚀/featureType.dto/input-feature.dto';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

@Resolver(() => FeatureTypeOutput)
export class FeatureTypeResolver {
  constructor(private readonly featureTypeService: FeatureTypeService) {}

  // Post data
  @Mutation(() => FeatureTypeOutput)
  async createFeatureType(
    @Args('input') input: CreateFeatureInput,
  ): Promise<FeatureTypeOutput> {
    try {
      return await this.featureTypeService.createFeatureType(input);
    } catch (error) {
      throw new InternalServerErrorException(
        error.message || 'Failed to create feature type',
      );
    }
  }

  // Update Data
  @Mutation(() => FeatureTypeOutput)
  async updateFeatureType(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateFeatureInput,
  ): Promise<FeatureTypeOutput> {
    try {
      return await this.featureTypeService.updateFeatureType(id, input);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Delete data
  @Mutation(() => FeatureTypeOutput)
  async deleteFeaturetype(@Args('id', { type: () => Int }) id: number) {
    try {
      return await this.featureTypeService.deleteFeatureType(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  // Get All
  @Query(() => FeatureTypeResponse)
  async getFeatureTypes(): Promise<FeatureTypeResponse> {
    try {
      const featureTypes = await this.featureTypeService.getFeatureTypes();
      return featureTypes;
    } catch (error) {
      console.error('Error fetching feature types:', error);
      throw new InternalServerErrorException(
        error.message || 'Failed to fetch feature types',
      );
    }
  }

  // Get by Id
  @Query(() => FeatureTypeOutput)
  async getFeatureTypeById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<FeatureTypeOutput> {
    try {
      return await this.featureTypeService.getById(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
