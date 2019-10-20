const Sequelize = require('sequelize');
const userService = require('../services/user-service');
const tokenGen = require('../utils/user-token-gen');
const imageUrlArray = require('../models/image-url-array');

class AuthorController {
    static async addAuthor(req, res) {
        /* Commented Out Author associations */
        // const authorId = req.body.authorId;

        let userToken = tokenGen();
        const Author = { name: req.body.name, 
                         body: req.body.body,
                         token: userToken }
        const newAuthor = await userService.save( Author );
        console.log("***  New Author *** \n", newAuthor);
        res.render("users/new", Author)

        // newPost.addAuthor(authorId)
    }
   

    static async renderAll(req, res) {
        const authors = await userService.findAll();
        res.render("users/all", { authors })
    }

    static async renderUser(req, res) {
        const userId = req.params.id;
        const author = await userService.findAuthorById(userId)
    }

    static async renderUserForm(req, res) {
        res.render("users/new-form");
    }
}

module.exports = AuthorController;