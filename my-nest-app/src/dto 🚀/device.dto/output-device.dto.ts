import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FeatureTypeOutput } from '../featureType.dto/output-feature.dto';
import { DriverOutput } from '../driver.dto/output.driver.dto';

@ObjectType()
export class DeviceOutput {
  @Field(() => ID)
  id: number;

  @Field()
  featureTypeId: number;

  @Field()
  driverId: number;

  @Field()
  brand: string;

  @Field()
  deviceVersion: string;

  @Field()
  status: boolean;

  @Field(() => FeatureTypeOutput, { nullable: true })
  featureType?: FeatureTypeOutput;

  @Field(() => DriverOutput, { nullable: true })
  driver?: DriverOutput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
