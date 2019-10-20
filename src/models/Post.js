const Sequelize = require('sequelize');
const sequelize = require('../data/db');
const Author = require('./Author');

const Post = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Post.belongsTo(Author, { constraints: true, onDelete: 'CASCADE' });
Author.hasMany(Post);

module.exports = Post;