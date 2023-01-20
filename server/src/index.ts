import config from './config.js'
import express from 'express'
// import path from "path";
import { sequelize } from './db.js'
import { Role } from './models/models.js'
import { router } from './routes/index.js'

// const dbInit = () => {
//   Role.sync()
// }

// const create = async (payload: RoleAttributes): promise<Ingre>

const PORT = config.PORT || 5000
const app = express()
app.use(express.json())
app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    // const role = await Role.create({ roleName: 'ADMIN' })
    app.listen(PORT, () => console.log('Server started on port: ', PORT))
  } catch (e) {
    console.log(e)
  }
}

start()
