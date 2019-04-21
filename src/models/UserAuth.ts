import { model, Schema, Document, HookNextFunction } from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser extends Document {
   name: string
   email: string
   password?: string
   ola(): string 
}

const UserAuth = new Schema({
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
}).pre('save', async function(this: IUser, next: HookNextFunction){
   const hash = await bcrypt.hash(this.password, 10)
   this.password = hash
   next()
})

UserAuth.methods.ola = function(this): string{
   return `Olá, ${this.name}!`
}

export default model<IUser>('UserAuth', UserAuth)


