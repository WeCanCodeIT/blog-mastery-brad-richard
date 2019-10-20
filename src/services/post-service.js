const Sequelize = require('sequelize');
const Post = require('../models/Post');

module.exports = {
    async findAll () {
        try {
            const posts = await Post.findAll();
            return posts;
        } catch (err) {
            return err;
        }
    },
    async findAuthorById(userId) {
        try {
            const posts = await Post.findByPk(userId);
            return posts;
        } catch (err) {
            return err;
        }
    },
    async save (newPost) {
        try {
            await Post.create(newPost);
        } catch (err) {
            return err;
        }
    }
}