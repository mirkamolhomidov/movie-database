import MovieService from '../services/movies.service.js'

class MovieController {
	constructor() {
		this.movieService = new MovieService()
	}
	async getAllMoviesController(req, res, next) {
		try {
			const movies = await this.movieService.getAllMovies()
			res.status(200).json({ message: 'success', movies })
		} catch (error) {
			next(error)
		}
	}
	async getOneMovieController(req, res, next) {
		try {
			const movie = await this.movieService.getOneMovie(req.params.id)
			res.status(200).json({ message: 'success', movie })
		} catch (error) {
			next(error)
		}
	}
	async createMovieController(req, res, next) {
		try {
			const movie = await this.movieService.createMovie(req.body)
			res.status(201).json({ message: 'success', movie })
		} catch (error) {
			next(error)
		}
	}
	async updateMovieController(req, res, next) {
		try {
			const movie = await this.movieService.updateMovie(req.params.id, req.body)
			res.status(201).json({ success: true, movie })
		} catch (error) {
			next(error)
		}
	}
	async deleteMovieController(req, res, next) {
		try {
			const movie = await this.movieService.deleteMovie(req.params.id)
			res.status(201).json({ success: true, movie })
		} catch (error) {
			next(error)
		}
	}
}

export default MovieController
