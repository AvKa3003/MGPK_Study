import { Router } from 'express'
import roleController from '../controllers/roleController.js'
const roleRouter = Router()

roleRouter.post('/', roleController.create)

export default roleRouter
