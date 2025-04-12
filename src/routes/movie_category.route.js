import { Router } from 'express'
import MovieCategoryController from '../controllers/movie_category.controller.js'

const movie_categoryRouter = Router()
const controller = new MovieCategoryController()

movie_categoryRouter.get(
	'/',
	controller.getAllMovieCategoryController.bind(controller)
)
movie_categoryRouter.get(
	'/:id',
	controller.getOneMovieCategoryController.bind(controller)
)
movie_categoryRouter.post(
	'/',
	controller.createMovieCategoryController.bind(controller)
)
movie_categoryRouter.put(
	'/:id',
	controller.updateMovieCategoryController.bind(controller)
)
movie_categoryRouter.delete(
	'/:id',
	controller.deleteMovieCategoryController.bind(controller)
)

export default movie_categoryRouter
