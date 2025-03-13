import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { DriversService } from './drivers.service';
import { DriverOutput } from 'src/dto 🚀/driver.dto/output.driver.dto';
import { CreateDriverInput } from 'src/dto 🚀/driver.dto/input-driver.dto';
import { InternalServerErrorException } from '@nestjs/common';

@Resolver()
export class DriversResolver {
  constructor(private readonly driverService: DriversService) {}

  // Post data
  @Mutation(() => DriverOutput)
  async createDriver(
    @Args('input') input: CreateDriverInput,
  ): Promise<DriverOutput> {
    try {
      return await this.driverService.createDriver(input);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
