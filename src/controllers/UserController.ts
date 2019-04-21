import User from '../models/User';
import Address from '../models/Address';
import { Request, Response } from 'express';


class UserController {
   public async findAll (req:Request, res:Response): Promise<Response> {
      const users = await User.findAll()
      const address = await Address.findAll()
      return res.json({users, address})
   }

   public async findOne (req:Request, res:Response): Promise<Response> {
      const id = Number(req.params.id)

      const user =  await User.findOne({where:{id} })

      return res.json(user)
   }

   public async create(req:Request, res:Response) : Promise<Response> {
      const {name,password, age } = req.body
      const createUser =  await User.create({
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
      const success = await User.update({name},{where:{id}})
      const user = await User.findOne({ where: {id} })
      return success ? res.json(user) : res.json('error')
   }

   public async delete(req: Request, res: Response): Promise<Response> {
      const id = Number(req.params.id)
      await User.destroy({where: {id}})
      return res.json(id)
   }
}

export default new UserController