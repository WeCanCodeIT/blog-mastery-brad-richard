const Sequelize = require('sequelize');
const sequelize = require('../data/db');
const Author = require('./Author');
const Genre = require('./Genre');

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

Post.belongsToMany(Genre, { through: "genre_post"});
Genre.belongsToMany(Post, { through: "genre_post"});

module.exports = Post;