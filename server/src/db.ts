import {} from 'dotenv/config.js'
import { Sequelize } from 'sequelize'
import config from './config.js'

export const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: config.DB_HOST,
    port: Number(config.DB_PORT),
  },
)
