import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDriverInput {
  @Field()
  driverType: string;
}
