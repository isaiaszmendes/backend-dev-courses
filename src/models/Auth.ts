import { model, Schema, Document, HookNextFunction } from 'mongoose'
import bcrypt from 'bcrypt'
import { Json } from 'sequelize/types/lib/utils';

interface IAuth extends Document {
   id: string
   name: string
   email: string
   password: string 
   ola(): string 
}

const AuthSchema = new Schema({
   name: {
      type: String,
      required: [true, 'Why no name?']
   },
   email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true
   },
   password:{
      type: String,
      required: true,
      select: false
   }
}, {
   timestamps: true
}).pre('save', async function(this: IAuth, next: HookNextFunction){
   const hash = await bcrypt.hash(this.password, 10)
   this.password = hash
   next()
})

AuthSchema.methods.ola = function(this): string{
   return `Olá, ${this.name}!`
}



export default model<IAuth>('Auth', AuthSchema)


