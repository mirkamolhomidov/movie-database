import { Router } from 'express'
import CategoryController from '../controllers/categories.controller.js'

const categoryRouter = Router()
const controller = new CategoryController()

categoryRouter.get('/', controller.getAllCategoryController.bind(controller))
categoryRouter.get('/:id', controller.getOneCategoryController.bind(controller))
categoryRouter.post('/', controller.createCategoryController.bind(controller))
categoryRouter.put('/:id', controller.updateCategoryController.bind(controller))
categoryRouter.delete(
	'/:id',
	controller.deleteCategoryController.bind(controller)
)

export default categoryRouter
