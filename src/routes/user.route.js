import { Router } from 'express'
import UserController from '../controllers/user.controller.js'

const userRouter = Router()
const controller = new UserController()

userRouter.get('/', controller.getAllUsersController.bind(controller))
userRouter.get('/:id', controller.getOneUserController.bind(controller))
userRouter.post('/', controller.createUserController.bind(controller))
userRouter.put('/:id', controller.updateUserController.bind(controller))
userRouter.delete('/:id', controller.deleteUserController.bind(controller))

export default userRouter
