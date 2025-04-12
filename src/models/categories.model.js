import mongoose, { Schema } from 'mongoose'
const CategorySchema = new Schema(
	{
		name: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	{ versionKey: false }
)
export const categoryModel = mongoose.model('Category', CategorySchema)
