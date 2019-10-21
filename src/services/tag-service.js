const Sequelize = require('sequelize');
const Tag = require('../models/Tag');

module.exports = {
    async findAll () {
        try {
            const tags = await Tag.findAll();
            console.log(tags);
            return tags;
        } catch (err) {
            return err;
        }
    },
    async findTagById(tagId) {
        try {
            const tag = await Tag.findByPk(tagId);
            return tag;
        } catch (err) {
            return err;
        }
    },
    async save (newTag) {
        try {
            await Tag.create(newTag);
        } catch (err) {
            return err;
        }
    }
}