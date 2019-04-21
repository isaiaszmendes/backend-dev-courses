import { Schema, model } from 'mongoose'

const CategorySchema = new Schema({
   type: {
      type: String,
      unique: true
   }
})

export default model('Category', CategorySchema)