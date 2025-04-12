import { Router } from 'express'
import MovieController from '../controllers/movies.controller.js'

const movieRouter = Router()
const controller = new MovieController()

movieRouter.get('/', controller.getAllMoviesController.bind(controller))
movieRouter.get('/:id', controller.getOneMovieController.bind(controller))
movieRouter.post('/', controller.createMovieController.bind(controller))
movieRouter.put('/:id', controller.updateMovieController.bind(controller))
movieRouter.delete('/:id', controller.deleteMovieController.bind(controller))

export default movieRouter
