import { Request, Response } from 'express'
import Category from '../models/Category'

class CategoryControlle {

   public async findAll(req: Request, res: Response): Promise<Response> {
      const category = await Category.find()
      
      return res.json(category)
   } 

   public async create(req: Request, res: Response): Promise<Response> {
      const { type } = req.body
      const category = await Category.create({type})

      return category ? res.json(category) : res.json('error')
   }
}

export default new CategoryControlle