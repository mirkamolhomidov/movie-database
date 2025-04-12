import mongoose, { Schema } from 'mongoose'
const movie_categorySchema = new Schema(
	{
		movie_id: {
			type: Schema.Types.ObjectId,
			ref: 'Movie',
			required: true,
		},
		category_id: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
	},
	{ versionKey: false }
)
export const movie_categoryModel = mongoose.model(
	'Movie_Category',
	movie_categorySchema
)
