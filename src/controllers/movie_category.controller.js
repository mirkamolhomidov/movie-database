import MovieCategoryService from '../services/movie_category.service.js'

class MovieCategoryController {
	constructor() {
		this.movieCategoryService = new MovieCategoryService()
	}
	async getAllMovieCategoryController(req, res, next) {
		try {
			const movie_category =
				await this.movieCategoryService.getAllMovieCategory()
			res.status(200).json({ message: 'success', movie_category })
		} catch (error) {
			next(error)
		}
	}
	async getOneMovieCategoryController(req, res, next) {
		try {
			const movieCategoryService =
				await this.movieCategoryService.getOneMovieCategory(req.params.id)
			res.status(200).json({ message: 'success', movieCategoryService })
		} catch (error) {
			next(error)
		}
	}
	async createMovieCategoryController(req, res, next) {
		try {
			const movie_category =
				await this.movieCategoryService.createMovieCategory(req.body)
			res.status(201).json({ message: 'success', movie_category })
		} catch (error) {
			next(error)
		}
	}
	async updateMovieCategoryController(req, res, next) {
		try {
			const movie_category =
				await this.movieCategoryService.updateMovieCategory(
					req.params.id,
					req.body
				)
			res.status(201).json({ success: true, movie_category })
		} catch (error) {
			next(error)
		}
	}
	async deleteMovieCategoryController(req, res, next) {
		try {
			const movie_category =
				await this.movieCategoryService.deleteMovieCategory(req.params.id)
			res.status(201).json({ success: true, movie_category })
		} catch (error) {
			next(error)
		}
	}
}

export default MovieCategoryController
