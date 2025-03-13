import { Sequelize } from 'sequelize-typescript';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FeatureType } from './featureType.model';
import { Driver } from './driver.model';
import { Device } from './device.model';

// ConfigModule.forRoot({ isGlobal: true });

const configService = new ConfigService();

const sequelize = new Sequelize({
  database: configService.get<string>('DB_NAME', ''),
  username: configService.get<string>('DB_USER', ''),
  password: configService.get<string>('DB_PASSWORD', ''),
  host: configService.get<string>('DB_HOST', ''),
  dialect: (configService.get<string>('DB_DIALECT') as any) || '',
  query: { raw: true },
  pool: {
    max: parseInt(configService.get<string>('DB_POOL_MAX') || '5', 10),
    min: parseInt(configService.get<string>('DB_POOL_MIN') || '0', 10),
    acquire: parseInt(
      configService.get<string>('DB_POOL_ACQUIRE') || '30000',
      10,
    ),
    idle: parseInt(configService.get<string>('DB_POOL_IDLE') || '10000', 10),
  },
  models: [FeatureType, Driver, Device],
});

export { sequelize };
