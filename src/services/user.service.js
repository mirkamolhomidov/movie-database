import { UserModel } from '../models/users.model.js'
import CustomError from '../utils/custom.error.js'

class UserService {
	constructor() {
		this.userModel = UserModel
	}
	async getAllUsers() {
		try {
			const users = await this.userModel.find()
			return users
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async getOneUser(id) {
		try {
			const user = await this.userModel.findOne({ _id: id })
			if (!user) {
				throw new CustomError('Bu id bilan foydalanuvchi topilmadi', 404)
			}
			return user
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async createUser(data) {
		try {
			const checkEmail = await this.userModel.findOne({ email: data.email })
			if (checkEmail) {
				throw new CustomError(
					'Bu email bilan foydalanuvchi allaqachon mavjud',
					400
				)
			}
			const user = await this.userModel.insertMany(data)
			return user
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async updateUser(id, data) {
		try {
			const user = await this.userModel.findByIdAndUpdate(id, data, {
				new: true,
				runValidators: true,
			})
			return user
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async deleteUser(id) {
		try {
			const user = await this.userModel.deleteOne({ _id: id })
			return user
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
}

export default UserService
