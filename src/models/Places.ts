import { Schema, model, Types } from 'mongoose'

const PlaceSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   localizacao:{
      type: String,
      required: true
   },
   categoria: {
      type: Types.ObjectId,
      ref: "Category"
   }
}, {
   timestamps: true
})

export default model('Place', PlaceSchema)