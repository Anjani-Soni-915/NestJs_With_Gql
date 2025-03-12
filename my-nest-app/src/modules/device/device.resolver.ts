import { Get } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { DeviceService } from './device.service';

@Resolver()
export class DeviceResolver {
  constructor(private readonly appService: DeviceService) {}

  @Get('')
  getHello(): string {
    return this.appService.sayHi();
  }
}
