import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { sequelize } from './models';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false, logging: false });
    console.log('🚀 Database connected successfully');
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error.message);
  }

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Server is running on http://localhost:${port}/graphql`);
}

bootstrap();
