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
    async findPostById(id) {
        try {
            const posts = await Post.findByPk(id);
            return posts;
        } catch (err) {
            return err;
        }
    },
    async save (post, tagIds, genreId) {
        try {
            const newPost = await Post.create(post);
            await newPost.addTag(tagIds);
            await newPost.addGenre(genreId);
            return newPost;
        } catch (err) {
            return err;
        }
    }
}