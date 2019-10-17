const Sequelize = require('sequelize');
const hostName = process.env.DB_HOST;

const Blog = new Sequelize(
    'blogsite',
    'root',
    'password',
    {
        dialect: 'mysql',
        host: hostName
    }
)

module.exports = Blog;