const Sequelize = require('sequelize');
const sequelize = require('../data/db');
const Post = require('./Post');

const Author = sequelize.define('author', {
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
    },

    avatarUrl: {
        type: Sequelize.STRING,
        allowNull: true
    },

    token: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Author;