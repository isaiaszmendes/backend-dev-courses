import {Request, Response } from 'express' 
import UserAuth from '../models/UserAuth'

class AuthController {
   public async register(req: Request, res: Response): Promise<Response> {   
      
      try{  
         const user = await UserAuth.create(req.body)
         user.password = undefined
         
         return res.json(user)

      } catch(err){         
         res.status(400)
         return res.json({error: 'registration failed', err})
      }
   }
}

export default new AuthController