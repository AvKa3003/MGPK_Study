import config from './config.js'
import express from 'express'
// import path from "path";
import { sequelize } from './db.js'

const PORT = config.PORT || 5000
const app = express()

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log('Server started on port: ', PORT))
  } catch (e) {
    console.log(e)
  }
}

start()
