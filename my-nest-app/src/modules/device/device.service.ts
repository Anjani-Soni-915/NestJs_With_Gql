import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { raw } from 'mysql2';
import { CreateDeviceInput } from 'src/dto 🚀/device.dto/input-device.dto';
import { DeviceOutput } from 'src/dto 🚀/device.dto/output-device.dto';
import { DriverOutput } from 'src/dto 🚀/driver.dto/output.driver.dto';
import { FeatureTypeOutput } from 'src/dto 🚀/featureType.dto/output-feature.dto';
import { Device } from 'src/models/device.model';
import { Driver } from 'src/models/driver.model';
import { FeatureType } from 'src/models/featureType.model';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device) private readonly deviceModel: typeof Device,
  ) {}

  // post data
  async createDevice(input: CreateDeviceInput): Promise<DeviceOutput> {
    const data = await this.deviceModel.create({ ...input });
    return data.get({ plain: true });
  }

  //get all
  async getAll(): Promise<DeviceOutput[]> {
    return await this.deviceModel.findAll({
      include: [{ model: FeatureType }, { model: Driver }],
      nest: true,
      raw: true,
    });
  }
}
