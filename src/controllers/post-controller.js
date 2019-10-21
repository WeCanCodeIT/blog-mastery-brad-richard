const Sequelize = require('sequelize');
const postService = require('../services/post-service');
const authorService = require('../services/user-service');
const tagService = require('../services/tag-service');
const genreService = require('../services/genre-service');

class PostController {
    static async addPost(req, res) {
        /* Commented Out Author associations */
        // const authorId = req.body.authorId;
        console.log(req.body)
        const token = req.body.token;
        const tags = req.body.tags;
        const userId = req.body.userId;
        const genreId = req.body.genreId;
        const Post = { 
            title: req.body.title, body: req.body.text
            
        }
        const newPost = await postService.save(Post);

        // Redirect to post route
        res.redirect("/posts")
    }

    static async renderAll(req, res) {
        const posts = await postService.findAll();
        res.render("posts", { posts })
    }

    static async renderPost(req, res) {
        const postId = req.params.id;
        const post = await postService.findPostById(postId)
    }

    static async renderPostForm(req, res) {
        const tags = await tagService.findAll();
        const genres = await genreService.findAll();
        const users = await authorService.findAll();
        res.render("posts-new", {
            tags: tags,
            genres: genres,
            users: users
        })
    }

    static async renderRecent(req, res) {
        const recentPosts = await postService.findAll();
    }
}

module.exports = PostController;