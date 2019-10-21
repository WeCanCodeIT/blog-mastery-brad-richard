const Sequelize = require('sequelize');
const sequelize = require('../data/db');

const Genre = sequelize.define('genres', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});



module.exports = Genre;