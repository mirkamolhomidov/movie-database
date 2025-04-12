import 'dotenv/config'
import express from 'express'
import connectDB from './config/database.js'
import errorHandler from './middleware/error.handler.js'
import Routes from './routes/routes.js'

const app = express()
app.use(express.json())
const routes = Routes()
routes.forEach(route => {
	app.use(route.path, route.router)
})
app.use(errorHandler)
const PORT = process.env.PORT

const initApp = async () => {
	try {
		await connectDB()
		app.listen(PORT, () => {
			console.log('Server is running port', PORT)
		})
	} catch (error) {
		console.error(error.message)
	}
}
initApp()
