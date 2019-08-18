import express from 'express'
import CourseController from '../controllers/CourseController';
const courseRoutes = express.Router()

courseRoutes.get('/courses', CourseController.listAll)


export default courseRoutes