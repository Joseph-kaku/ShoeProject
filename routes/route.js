const routes = require('express').Router();

const controllers = require('../controllers/controller')

routes.get('/', controllers.getAll)
routes.get('/:id', controllers.getSingle)

module.exports = routes