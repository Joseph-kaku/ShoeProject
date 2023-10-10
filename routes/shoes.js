const routes = require('express').Router();

const controllers = require('../controllers/shoes')

routes.get('/', controllers.getAllShoes)

module.exports = routes