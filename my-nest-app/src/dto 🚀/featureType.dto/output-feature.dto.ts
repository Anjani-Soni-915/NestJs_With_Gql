import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class FeatureTypeOutput {
  @Field(() => ID)
  id: number;

  @Field()
  type: string;

  @Field()
  status: boolean;

  @Field({ nullable: true })
  createdAt: string;

  @Field({ nullable: true })
  updatedAt: string;
}
