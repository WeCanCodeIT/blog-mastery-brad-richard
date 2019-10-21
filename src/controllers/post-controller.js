const Sequelize = require('sequelize');
const postService = require('../services/post-service');
const authorService = require('../services/user-service');
const tagService = require('../services/tag-service');
const genreService = require('../services/genre-service');
const userService = require('../services/user-service');
const authorModel = require('../models/Author');
const tagModel = require('../models/Tag');
const genreModel = require('../models/Genre');

class PostController {
    static async addPost(req, res) {

        const token = req.body.token;
        const userId = Number(req.body.userId);
        const genreId = Number(req.body.genreId);
        const Post = { 
            title: req.body.title, body: req.body.text,
            genreId: genreId, authorId: userId
        }
        
        // Build genre
        const tagIds = [];
        let tagStringIds;
        if (req.body.tags === undefined) {
            tagStringIds = [];
        } else if (typeof req.body.tags === "string") {
            tagStringIds = [req.body.tags]
        } else {
            tagStringIds = req.body.tags;
        }
        tagStringIds.forEach((tag) => {
            tagIds.push(Number(tag));
        });

        // Validate token
        const userCheck = await userService.validateToken(userId, token);
        console.log("**** User check ****", userCheck)
        if (userCheck === null || userCheck === undefined || userCheck.length === 0) {
            let error = { message: "The token did not match the user! Try again or never come back!", reroute: "/posts/new" }
            res.render("error", { error })
        } else {
            // Create Post
            await postService.save(Post, tagIds);
    
            // Redirect to post route
            res.redirect("/posts")
        }

    }

    static async renderAll(req, res) {
        const posts = await postService.findAll({
            include: [{
                model: authorModel,
                as: "author"
            },
            {
                model: genreModel,
                as: "genre"
            },
            {
                model: tagModel,
                as: "tags"
            }]
        });
        res.render("posts", { posts })
    }

    static async renderPost(req, res) {
        const postId = Number(req.params.id);
        const post = await postService.findPostById(postId)
        const tags = await post.getTags();
        const genre = await post.getGenre();
        const author = await post.getAuthor();

        const DateObject = new Date(post.createdAt);
        const postDate = DateObject.toDateString();
        
        res.render("post", { post, tags, genre, author, postDate })
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