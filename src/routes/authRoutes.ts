import express from 'express'
import AuthController from '../controllers/AuthController'
const authRoutes = express.Router()

authRoutes.post('/register', AuthController.register)

authRoutes.post('/authenticate', AuthController.authenticate)


export default authRoutes