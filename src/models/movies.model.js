import mongoose, { Schema } from 'mongoose'
const MovieSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		poster_img: {
			type: String,
		},
		release_year: {
			type: Number,
		},
	},
	{ versionKey: false }
)
export const moviesModel = mongoose.model('Movie', MovieSchema)
