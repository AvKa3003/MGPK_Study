import { Request, Response } from 'express'
import { Role } from '../models/models.js'

class roleController {
  async create(req: Request, res: Response) {
    try {
      console.log(req)
      if (req.body.roleName) {
        const role = await Role.create({ roleName: req.body.roleName })
        res.json(role.toJSON())
      } else {
        res.json('Invalid input')
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message)
        res.json(e.message)
      }
      res.json('Unknown error')
    }
  }
}

export default new roleController()
