import categoryRouter from './category.route.js'
import movieRouter from './movie.route.js'
import movie_categoryRouter from './movie_category.route.js'
import reviewRouter from './review.route.js'
import userRouter from './user.route.js'

const Routes = () => [
	{ path: '/api/user', router: userRouter },
	{ path: '/api/movie', router: movieRouter },
	{ path: '/api/category', router: categoryRouter },
	{ path: '/api/moviecategory', router: movie_categoryRouter },
	{ path: '/api/review', router: reviewRouter },
]

export default Routes
