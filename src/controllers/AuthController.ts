import { Request, Response } from 'express' 
import bcript from 'bcrypt'
import jwt from 'jsonwebtoken'
import Auth from '../models/Auth'
import hash from '../config/auth'

const generateToken = (params: Object) => {
   return jwt.sign(params, hash.secret, {
      expiresIn: (60 * 60) / 2 // meia hora
   }) 
}

class AuthController {
   public async register(req: Request, res: Response): Promise<Response> {   
      const { email } = req.body
      try{  
         if(await Auth.findOne({email}))
         return res.status(400).json({error: 'User already exists'}) 

         const user = await Auth.create(req.body)
         const newUser = user.toObject()
         delete newUser.password
         const token = generateToken({id: user.id})
         return res.json({newUser, token})

      } catch(err){         
         res.status(400)
         return res.json({error: 'registration failed', err})
      }
   }

   public async authenticate(req:Request, res:Response): Promise<Response>{
      const { email, password } = req.body
      const user = await Auth.findOne({email}).select('+password')
     
      if(!user){
         return res.status(400)
                  .json({erro: 'User not found'})
      }

      if(!await bcript.compare(password, user.password))
         return res.status(400)  .json({ error: 'Invalid password'})

      const userAuth = user.toObject()
      delete userAuth.password

      const token = generateToken({id: user.id})

      return res.json({userAuth, token})
   }
}

export default new AuthController