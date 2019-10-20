const Sequelize = require('sequelize');
const Author = require('../models/Author');

module.exports = {
    async findAll () {
        try {
            const authors = await Author.findAll();
            return authors;
        } catch (err) {
            return err;
        }
    },
    async findAuthorById(userId) {
        try {
            const author = await Author.findByPk(userId);
            return author;
        } catch (err) {
            return err;
        }
    },
    async save (newAuthor) {
        try {
            await Author.create(newAuthor);
        } catch (err) {
            return err;
        }
    }
}