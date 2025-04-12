import { ReviewsModel } from '../models/reviews.model.js'
import CustomError from '../utils/custom.error.js'

class ReviewService {
	constructor() {
		this.reviewModel = ReviewsModel
	}
	async getAllReviews() {
		try {
			const reviews = await this.reviewModel
				.find()
				.populate('movies_id')
				.populate('user_id')
			return reviews
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async getOneReview(id) {
		try {
			const review = await this.reviewModel
				.findOne({ _id: id })
				.populate('movies_id')
				.populate('user_id')
			if (!review) {
				throw new CustomError('Bu id bilan review topilmadi', 404)
			}
			return review
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async createReview(data) {
		try {
			const review = await this.reviewModel.create(data)
			await review.populate('movies_id').populate('user_id')
			return review
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async updateReview(id, data) {
		try {
			const review = await this.reviewModel
				.findByIdAndUpdate(id, data, {
					new: true,
					runValidators: true,
				})
				.populate('movies_id')
				.populate('user_id')
			return review
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
	async deleteReview(id) {
		try {
			const review = await this.reviewModel.deleteOne({ _id: id })
			return review
		} catch (error) {
			throw new CustomError(error.message, error.status || 500)
		}
	}
}

export default ReviewService
