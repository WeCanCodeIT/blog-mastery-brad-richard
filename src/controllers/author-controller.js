const Sequelize = require('sequelize');
const authorService = require('../services/author-service');

class AuthorController {
    static async addAuthor(req, res) {
        /* Commented Out Author associations */
        // const authorId = req.body.authorId;

        const Author = { name: req.body.name, body: req.body.body }
        const newAuthor = await postService.addPost( Post );

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

module.exports = AuthorController;