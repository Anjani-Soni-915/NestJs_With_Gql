import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceResolver } from './device.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Device } from 'src/models/device.model';

@Module({
  imports: [SequelizeModule.forFeature([Device])],
  providers: [DeviceService, DeviceResolver],
  exports: [DeviceService],
})
export class DeviceModule {}
