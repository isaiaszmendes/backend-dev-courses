import express from 'express'
import UserController from '../controllers/UserController'
import AuthController from '../controllers/AuthController'
const userRoutes = express.Router()

userRoutes.post('/register', AuthController.register)


userRoutes.get('/users', UserController.findAll)
userRoutes.get('/users/:id', UserController.findOne)
userRoutes.post('/users', UserController.create)
userRoutes.put('/users/:id', UserController.update)
userRoutes.delete('/users/:id', UserController.delete)
// userRoutes.get('/adress', UserController.indexAddress)


export default userRoutes