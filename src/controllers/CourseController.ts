import Course from '../models/Course';

import { Request, Response } from 'express';

class CourseController {
   public async listAll (req:Request, res:Response): Promise<Response> {
      const courses = await Course.findAll()

      return res.json({courses})
   }

   public async findOne (req:Request, res:Response): Promise<Response> {
      const id = Number(req.params.id)

      const user =  await Course.findOne({where:{id} })

      return res.json(user)
   }

   public async create(req:Request, res:Response) : Promise<Response> {
      const {name,password, age } = req.body
      const createUser =  await Course.create({
         name,
         password,
         age
      });

      return res.json(createUser)
   }

   // public async indexAddress(req:Request, res:Response) : Promise<Response> {

   //    const addresses =  await Address.findAll()

   //    return res.json(addresses)
   // }

   public async update(req: Request, res: Response): Promise<Response> {
      const id = Number(req.params.id)
      const {name} = req.body
      const success = await Course.update({name},{where:{id}})
      const user = await Course.findOne({ where: {id} })
      return success ? res.json(Course) : res.json('error')
   }

   public async delete(req: Request, res: Response): Promise<Response> {
      const id = Number(req.params.id)
      await Course.destroy({where: {id}})
      return res.json(id)
   }
}

export default new CourseController