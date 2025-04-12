import mongoose, { Schema } from 'mongoose'
const UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		is_admin: {
			type: Boolean,
			default: false,
		},
	},
	{ versionKey: false }
)
export const UserModel = mongoose.model('Users', UserSchema)
