import express from 'express'
import userRoutes from './userRoutes'
import infoRoutes from './infoRoutes'
import categoryRoutes from './categoryRoutes'
const routes = express.Router()
 
routes.use(userRoutes)
routes.use(infoRoutes)
routes.use(categoryRoutes)

export default routes