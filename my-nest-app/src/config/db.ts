import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  dialect: process.env.DB_DIALECT || 'mysql', // ✅ Ensure a valid dialect
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306, // ✅ Ensure port is a number
  username: process.env.DB_USER, // ✅ Sequelize expects "username", not "user"
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadModels: true,
  synchronize: false, // Set true only in development
  pool: {
    max: Number(process.env.DB_POOL_MAX) || 5,
    min: Number(process.env.DB_POOL_MIN) || 0,
    acquire: Number(process.env.DB_POOL_ACQUIRE) || 30000,
    idle: Number(process.env.DB_POOL_IDLE) || 10000,
  },
}));
