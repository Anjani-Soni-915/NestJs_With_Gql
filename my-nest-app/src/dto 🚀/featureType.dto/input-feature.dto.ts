import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFeatureInput {
  @Field()
  type: string;
}

@InputType()
export class UpdateFeatureInput {
  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  status?: boolean;
}
