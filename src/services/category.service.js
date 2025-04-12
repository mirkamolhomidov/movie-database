import { categoryModel } from '../models/categories.model.js'
import CustomError from '../utils/custom.error.js'

class CategoryService {
	constructor() {
		this.categoryModel = categoryModel
	}
	async getAllCategories() {
		try {
			const categories = await this.categoryModel.find()
			return categories
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async getOneCategory(id) {
		try {
			const category = await this.categoryModel.findOne({ _id: id })
			if (!category) {
				throw new CustomError('Bu id bilan kategoriya topilmadi', 404)
			}
			return category
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async createCategory(data) {
		try {
			const category = await this.categoryModel.insertMany(data)
			return category
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async updateCategory(id, data) {
		try {
			const category = await this.categoryModel.findByIdAndUpdate(id, data, {
				new: true,
				runValidators: true,
			})
			return category
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async deleteCategory(id) {
		try {
			const category = await this.categoryModel.deleteOne({ _id: id })
			return category
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
}

export default CategoryService
