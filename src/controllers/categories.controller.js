import CategoryService from '../services/category.service.js'

class CategoryController {
	constructor() {
		this.categoryService = new CategoryService()
	}
	async getAllCategoryController(req, res, next) {
		try {
			const categories = await this.categoryService.getAllCategories()
			res.status(200).json({ message: 'success', categories })
		} catch (error) {
			next(error)
		}
	}
	async getOneCategoryController(req, res, next) {
		try {
			const category = await this.categoryService.getOneCategory(req.params.id)
			res.status(200).json({ message: 'success', category })
		} catch (error) {
			next(error)
		}
	}
	async createCategoryController(req, res, next) {
		try {
			const category = await this.categoryService.createCategory(req.body)
			res.status(201).json({ message: 'success', category })
		} catch (error) {
			next(error)
		}
	}
	async updateCategoryController(req, res, next) {
		try {
			const category = await this.categoryService.updateCategory(
				req.params.id,
				req.body
			)
			res.status(201).json({ success: true, category })
		} catch (error) {
			next(error)
		}
	}
	async deleteCategoryController(req, res, next) {
		try {
			const category = await this.categoryService.deleteCategory(req.params.id)
			res.status(201).json({ success: true, category })
		} catch (error) {
			next(error)
		}
	}
}

export default CategoryController
