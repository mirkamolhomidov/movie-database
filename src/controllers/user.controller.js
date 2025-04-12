import UserService from '../services/user.service.js'

class UserController {
	constructor() {
		this.userService = new UserService()
	}
	async getAllUsersController(req, res, next) {
		try {
			const users = await this.userService.getAllUsers()
			res.status(200).json({ message: 'success', users })
		} catch (error) {
			next(error)
		}
	}
	async getOneUserController(req, res, next) {
		try {
			const user = await this.userService.getOneUser(req.params.id)
			res.status(200).json({ message: 'success', user })
		} catch (error) {
			next(error)
		}
	}
	async createUserController(req, res, next) {
		try {
			const user = await this.userService.createUser(req.body)
			res.status(201).json({ message: 'success', user })
		} catch (error) {
			next(error)
		}
	}
	async updateUserController(req, res, next) {
		try {
			const user = await this.userService.updateUser(req.params.id, req.body)
			res.status(201).json({ success: true, user })
		} catch (error) {
			next(error)
		}
	}
	async deleteUserController(req, res, next) {
		try {
			const user = await this.userService.deleteUser(req.params.id)
			res.status(201).json({ success: true, user })
		} catch (error) {
			next(error)
		}
	}
}

export default UserController
