const routes = require('express').Router();

const controllers = require('../controllers/controller')

routes.get('/', controllers.getAllShoes)

module.exports = routes