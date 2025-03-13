import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDriverInput } from 'src/dto 🚀/driver.dto/input-driver.dto';
import { DriverOutput } from 'src/dto 🚀/driver.dto/output.driver.dto';
import { Driver } from 'src/models/driver.model';

@Injectable()
export class DriversService {
  constructor(
    @InjectModel(Driver) private readonly driverModel: typeof Driver,
  ) {}

  async createDriver(input: CreateDriverInput): Promise<DriverOutput> {
    const existingDriver = await this.driverModel.findOne({
      where: { driverType: input.driverType },
    });

    if (existingDriver) {
      throw new ConflictException('Type already present');
    }

    const data = await this.driverModel.create({ ...input });

    return data.get({ plain: true });
  }
}
