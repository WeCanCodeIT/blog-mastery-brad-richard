const Sequelize = require('sequelize');
const sequelize = require('../data/db');

const Author = sequelize.define('author', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Author;