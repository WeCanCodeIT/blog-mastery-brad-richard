const postController = require('./post-controller');
const postService = require('../services/post-service');

class indexController {
    static async renderMain(req, res) {
        res.render("index", {});
    }
}

module.exports = indexController;