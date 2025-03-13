import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class DriverOutput {
  @Field(() => ID)
  id: number;

  @Field()
  driverType: string;

  @Field()
  status: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}

@ObjectType()
export class DriverResponse {
  @Field(() => Int)
  count: number;

  @Field(() => [DriverOutput])
  data: DriverOutput[];
}
