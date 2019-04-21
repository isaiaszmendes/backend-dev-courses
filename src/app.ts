import express, { Application } from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import useragent from 'express-useragent'

class App {
   public express: Application

   public constructor(){
      this.express = express()
      this.database()
      this.middlewares()
      this.routes()
   }

   private middlewares(): void{
      this.express.use(express.json())
      this.express.use(express.urlencoded({ extended: true }))
      this.express.use(useragent.express())
   }

   private routes(): void {
      this.express.use(routes)
   }

   private database(): void {
      mongoose.connect(
         'mongodb+srv://root:P@ssw0rd@cluster0-4bkoq.mongodb.net/places?retryWrites=true', 
         {
            useNewUrlParser: true,
            useCreateIndex: true

         }
      )
   }
}

export default new App().express