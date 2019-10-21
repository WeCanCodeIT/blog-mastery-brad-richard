const Sequelize = require('sequelize');
const Genre = require('../models/Genre');

module.exports = {
    async findAll () {
        try {
            const genres = await Genre.findAll();
            return genres;
        } catch (err) {
            return err;
        }
    },
    async findAuthorById(userId) {
        try {
            const genres = await Genre.findByPk(userId);
            return genres;
        } catch (err) {
            return err;
        }
    },
    async save (newGenre) {
        try {
            await Genre.create(newGenre);
        } catch (err) {
            return err;
        }
    }
}