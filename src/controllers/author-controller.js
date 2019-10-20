const Sequelize = require('sequelize');
const authorService = require('../services/author-service');
const tokenGen = require('../utils/user-token-gen');

class AuthorController {
    static async addAuthor(req, res) {
        /* Commented Out Author associations */
        // const authorId = req.body.authorId;

        let userToken = tokenGen();
        const Author = { name: req.body.name, 
                         body: req.body.body,
                         token: userToken }
        const newAuthor = await authorService.save( Author );
        res.render("/user/new")

        // newPost.addAuthor(authorId)
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