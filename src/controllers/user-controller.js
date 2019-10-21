const Sequelize = require('sequelize');
const userService = require('../services/user-service');
const tokenGen = require('../utils/user-token-gen');
const avatarArray = require('../models/image-url-array');

class AuthorController {
    static async addUser(req, res) {
        /* Commented Out Author associations */
        // const authorId = req.body.authorId;

        let userToken = tokenGen();
        const User = { name: req.body.name, 
                         body: req.body.body,
                         token: userToken,
                         quote: req.body.quote,
                         avatarUrl: req.body.avatarUrl }
        const newUser = await userService.save( User );
        console.log("***  New User *** \n", newUser);
        res.render("users/new-form", {user: User})

        // newPost.addAuthor(authorId)
    }
   

    static async renderAll(req, res) {
        const authors = await userService.findAll();
        res.render("users/all", { authors })
    }

    static async renderUser(req, res) {
        const userId = req.params.id;
        const author = await userService.findAuthorById(userId)
        res.render("users/single", {author})
    }

    static async renderUserForm(req, res) {
        res.render("users/new-form", { avatars: avatarArray });
    }

}

module.exports = AuthorController;