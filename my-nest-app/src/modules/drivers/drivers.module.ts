import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversResolver } from './drivers.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Driver } from 'src/models/driver.model';

@Module({
  imports: [SequelizeModule.forFeature([Driver])],
  providers: [DriversService, DriversResolver],
  exports: [DriversService],
})
export class DriversModule {}
