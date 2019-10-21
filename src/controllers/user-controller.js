const Sequelize = require('sequelize');
const userService = require('../services/user-service');
const tokenGen = require('../utils/user-token-gen');
const avatarArray = require('../models/image-url-array');

class AuthorController {
    static async addUser(req, res) {
        // let userToken = tokenGen();
        const User = { name: req.body.name, 
                         body: req.body.body,
                         token: req.body.token,
                         quote: req.body.quote,
                         avatarUrl: req.body.avatarUrl }
        const newUser = await userService.save( User );
        res.render("users/new", {user: User})
    }
   

    static async renderAll(req, res) {
        const authors = await userService.findAll();
        res.render("users/all", { authors })
    }

    static async renderUser(req, res) {
        const userId = Number(req.params.id);
        const author = await userService.findAuthorById(userId)
        const posts = await author.getPosts();
        
        res.render("users/single", {author, posts})
    }

    static async renderUserForm(req, res) {
        res.render("users/new-form", { avatars: avatarArray });
    }

}

module.exports = AuthorController;