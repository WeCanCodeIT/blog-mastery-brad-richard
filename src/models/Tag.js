const Sequelize = require('sequelize');
const sequelize = require('../data/db');
const Post = require('./Post');

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

// Post.hasMany(Tag, {through: 'post_tags'})
// Tag.hasMany(Post, {through: 'post_tags'})

module.exports = Tag;