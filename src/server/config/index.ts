import dotenv from 'dotenv'

dotenv.config()

interface Config {
  PORT: number
}

export const config: Config = {
  PORT: parseInt(process.env.PORT),
}