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
    async findGenreById(id) {
        try {
            const genre = await Genre.findByPk(id);
            return genre;
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