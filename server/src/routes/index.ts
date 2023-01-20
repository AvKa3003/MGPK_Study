import { Router } from 'express'
import roleRouter from './roleRouter.js'
const router = Router()
router.use('/role', roleRouter)

export { router }
