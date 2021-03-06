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
    async save (author) {
        try {
            const newAuthor = await Author.create(author);
            return newAuthor;
        } catch (err) {
            return err;
        }
    },
    async validateToken(authorId, token) {
        try {
            const checkedUser = await Author.findAll({
                limit: 1,
                where: {id: authorId, token: token}
            });
            return checkedUser;
        } catch (error) {
            return error
        }
    }
}