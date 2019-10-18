const Sequelize = require('sequelize');
const postService = require('../services/post-service');

class PostController {
    static async addPost(req, res) {
        /* Commented Out Author associations */
        // const authorId = req.body.authorId;

        const Post = { title: req.body.title, body: req.body.body }
        const newPost = await postService.addPost( Post );

        // newPost.addAuthor(authorId)
        res.redirect("/")
    }

    static async renderAll(req, res) {
        const posts = await postService.findAll();
        res.render("index", { posts })
    }

    static async renderPost(req, res) {
        const postId = req.params.id;
        const post = await postService.findPostById()
    }
}