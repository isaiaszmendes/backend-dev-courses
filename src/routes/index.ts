import express from 'express'
import userRoutes from './userRoutes'
import infoRoutes from './infoRoutes'
import categoryRoutes from './categoryRoutes'
import authRoutes from './authRoutes'
const routes = express.Router()
 
routes.use(userRoutes)
routes.use(infoRoutes)
routes.use(categoryRoutes)
routes.use(authRoutes)

export default routes