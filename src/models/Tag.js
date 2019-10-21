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
        allowNull: false,
        unique: true
    }
});

Post.belongsToMany(Tag, {through: 'post_tags'})
Tag.belongsToMany(Post, {through: 'post_tags'})

module.exports = Tag;