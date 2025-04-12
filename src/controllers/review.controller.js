import ReviewService from '../services/review.service.js'

class ReviewController {
	constructor() {
		this.reviewService = new ReviewService()
	}
	async getAllReviewsController(req, res, next) {
		try {
			const reviews = await this.reviewService.getAllReviews()
			res.status(200).json({ message: 'success', reviews })
		} catch (error) {
			next(error)
		}
	}
	async getOneReviewController(req, res, next) {
		try {
			const review = await this.reviewService.getOneReview(req.params.id)
			res.status(200).json({ message: 'success', review })
		} catch (error) {
			next(error)
		}
	}
	async createReviewController(req, res, next) {
		try {
			const review = await this.reviewService.createReview(req.body)
			res.status(201).json({ message: 'success', review })
		} catch (error) {
			next(error)
		}
	}
	async updateReviewController(req, res, next) {
		try {
			const review = await this.reviewService.updateReview(
				req.params.id,
				req.body
			)
			res.status(201).json({ success: true, review })
		} catch (error) {
			next(error)
		}
	}
	async deleteReviewController(req, res, next) {
		try {
			const review = await this.reviewService.deleteReview(req.params.id)
			res.status(201).json({ success: true, review })
		} catch (error) {
			next(error)
		}
	}
}

export default ReviewController
