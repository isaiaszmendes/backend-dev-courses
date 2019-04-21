import express from 'express'
import CategoryController from '../controllers/CategoryController'
const categoryRoutes = express.Router()


categoryRoutes.get('/category', CategoryController.findAll)
categoryRoutes.post('/category', CategoryController.create)

export default categoryRoutes