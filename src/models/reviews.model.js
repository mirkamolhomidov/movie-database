import mongoose, { Schema } from 'mongoose'

const reviewsSchema = new Schema(
	{
		movies_id: {
			type: Schema.Types.ObjectId,
			ref: 'Movie',
			required: true,
		},
		user_id: {
			type: Schema.Types.ObjectId,
			ref: 'Users',
			required: true,
		},
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 10,
		},
		comment: {
			type: String,
		},
	},
	{ timestamps: true, versionKey: false }
)

export const ReviewsModel = mongoose.model('Review', reviewsSchema)
