import { movie_categoryModel } from '../models/movie_categories.model.js'
import CustomError from '../utils/custom.error.js'

class MovieCategoryService {
	constructor() {
		this.movie_categoryModel = movie_categoryModel
	}
	async getAllMovieCategory() {
		try {
			const movie_categories = await this.movie_categoryModel
				.find()
				.populate('movie_id')
				.populate('category_id')
			return movie_categories
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async getOneMovieCategory(id) {
		try {
			const movie_category = await this.movie_categoryModel
				.findOne({ _id: id })
				.populate('movie_id')
				.populate('category_id')

			if (!movie_category) {
				throw new CustomError('Bu id bilan hech narsa topilmadi', 404)
			}
			return movie_category
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async createMovieCategory(data) {
		try {
			const movie_category = await this.movie_categoryModel.create(data)
			await (await movie_category.populate('movie_id')).populate('category_id')
			return movie_category
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async updateMovieCategory(id, data) {
		try {
			const movie_category = await this.movie_categoryModel
				.findByIdAndUpdate(id, data, {
					new: true,
					runValidators: true,
				})
				.populate('movie_id')
				.populate('category_id')
			return movie_category
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async deleteMovieCategory(id) {
		try {
			const movie_category = await this.movie_categoryModel.deleteOne({
				_id: id,
			})
			return movie_category
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
}

export default MovieCategoryService
