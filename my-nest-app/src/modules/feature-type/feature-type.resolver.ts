import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FeatureTypeService } from './feature-type.service';
import { FeatureTypeOutput } from '../../dto 🚀/featureType.dto/output-feature.dto';
import { CreateFeatureInput } from '../../dto 🚀/featureType.dto/create-feature.dto';

@Resolver(() => FeatureTypeOutput)
export class FeatureTypeResolver {
  constructor(private readonly featureTypeService: FeatureTypeService) {}

  @Mutation(() => FeatureTypeOutput)
  async createFeatureType(
    @Args('input') input: CreateFeatureInput,
  ): Promise<FeatureTypeOutput> {
    return this.featureTypeService.createFeatureType(input);
  }

  @Query(() => [FeatureTypeOutput])
  async getFeatureTypes(): Promise<FeatureTypeOutput[]> {
    return this.featureTypeService.getFeatureTypes();
  }
}
