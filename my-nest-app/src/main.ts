import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { sequelize } from './models';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     transform: true,
  //     validationError: { target: false },
  //     exceptionFactory: (errors) => {
  //       return new BadRequestException({
  //         message: 'Validation failed',
  //         errors: errors.map((error) => ({
  //           field: error.property,
  //           messages: error.constraints
  //             ? Object.values(error.constraints)
  //             : ['Invalid value'],
  //         })),
  //       });
  //     },
  //   }),
  // );

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
