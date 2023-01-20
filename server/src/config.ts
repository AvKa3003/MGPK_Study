import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

dotenv.config({ path: path.resolve(__dirname, '../.env') })

interface ENV {
  NODE_ENV: string | undefined
  PORT: string | undefined
  DB_NAME: string | undefined
  DB_USER: string | undefined
  DB_PASSWORD: string | undefined
  DB_HOST: string | undefined
  DB_PORT: number | undefined
  SECRET_KEY: string | undefined
}

interface Config {
  NODE_ENV: string
  PORT: string
  DB_NAME: string
  DB_USER: string
  DB_PASSWORD: string
  DB_HOST: string
  DB_PORT: number
  SECRET_KEY: string
}

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    SECRET_KEY: process.env.SECRET_KEY,
  }
}

const getSanitizedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    console.log(value)

    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`)
    }
  }
  return config as Config
}

const config = getConfig()

const sanitizedConfig = getSanitizedConfig(config)

export default sanitizedConfig
