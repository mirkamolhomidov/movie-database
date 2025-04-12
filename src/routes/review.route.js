import { Router } from 'express'
import ReviewController from '../controllers/review.controller.js'

const reviewRouter = Router()
const controller = new ReviewController()

reviewRouter.get('/', controller.getAllReviewsController.bind(controller))
reviewRouter.get('/:id', controller.getOneReviewController.bind(controller))
reviewRouter.post('/', controller.createReviewController.bind(controller))
reviewRouter.put('/:id', controller.updateReviewController.bind(controller))
reviewRouter.delete('/:id', controller.deleteReviewController.bind(controller))

export default reviewRouter
