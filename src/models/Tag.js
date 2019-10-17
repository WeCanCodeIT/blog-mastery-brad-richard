const Sequelize = require('sequelize');
const sequelize = require('../data/db');

const Tag = sequelize.define('tags', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Tag;