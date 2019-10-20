const Sequelize = require('sequelize');
const postService = require('../services/post-service');
const authorService = require('../services/author-service');

class PostController {
    static async addPost(req, res) {
        /* Commented Out Author associations */
        // const authorId = req.body.authorId;

        const Post = { title: req.body.title, body: req.body.body }
        const 
        const newPost = await postService.save(Post);

        // Redirect to post route
        res.redirect("/posts")
    }

    static async renderAll(req, res) {
        const posts = await postService.findAll();
        res.render("/posts", { posts })
    }

    static async renderPost(req, res) {
        const postId = req.params.id;
        const post = await postService.findPostById()
    }
}

module.exports = PostController;