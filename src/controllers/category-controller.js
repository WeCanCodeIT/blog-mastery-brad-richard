const Sequelize = require('sequelize');
const categoryService = require('../services/genre-service');

class CategoryController {
    static async renderAll(req, res) {
        const categories = await categoryService.findAll();
        res.render("categories", {categories })
    }
    static async renderCategory(req, res) {
        const categoryId = Number(req.params.id);
        const category = await categoryService.findGenreById(categoryId)
        const posts = await category.getPosts();
        
        res.render("category", {category, posts})
    }

}

module.exports = CategoryController;