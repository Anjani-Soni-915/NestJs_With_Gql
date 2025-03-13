import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateDeviceInput {
  @Field()
  featureTypeId: number;

  @Field()
  driverId: number;

  @Field()
  brand: string;

  @Field()
  deviceVersion: string;
}
