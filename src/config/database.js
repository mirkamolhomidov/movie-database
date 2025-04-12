import mongoose from 'mongoose'
const connectDB = async () => {
	try {
		const url = process.env.DB_URL
		await mongoose.connect(url)
		console.log('Database connected')
	} catch (error) {
		console.error(error.message)
		process.exit(1)
	}
}
export default connectDB
