import { InternalServerErrorException } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { DeviceService } from './device.service';
import { DeviceOutput } from 'src/dto 🚀/device.dto/output-device.dto';
import { CreateDeviceInput } from 'src/dto 🚀/device.dto/input-device.dto';

@Resolver()
export class DeviceResolver {
  constructor(private readonly deviceService: DeviceService) {}

  @Mutation(() => DeviceOutput)
  async createDevice(
    @Args('input') input: CreateDeviceInput,
  ): Promise<DeviceOutput> {
    return this.deviceService.createDevice(input);
  }

  @Query(() => [DeviceOutput])
  async getAlldevices(): Promise<DeviceOutput[]> {
    try {
      return await this.deviceService.getAll();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
