import { moviesModel } from '../models/movies.model.js'
import CustomError from '../utils/custom.error.js'

class MovieService {
	constructor() {
		this.moviesModel = moviesModel
	}
	async getAllMovies() {
		try {
			const movies = await this.moviesModel.find()
			return movies
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async getOneMovie(id) {
		try {
			const movie = await this.moviesModel.findOne({ _id: id })
			if (!movie) {
				throw new CustomError('Bu id bilan kino topilmadi', 404)
			}
			return movie
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async createMovie(data) {
		try {
			const movie = await this.moviesModel.insertMany(data)
			return movie
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async updateMovie(id, data) {
		try {
			const movie = await this.moviesModel.findByIdAndUpdate(id, data, {
				new: true,
				runValidators: true,
			})
			return movie
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async deleteMovie(id) {
		try {
			const movie = await this.moviesModel.deleteOne({ _id: id })
			return movie
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
}

export default MovieService
