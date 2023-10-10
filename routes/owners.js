const routes = require('express').Router();

const controllers = require('../controllers/owner')

routes.get('/', controllers.getAllOwners)

module.exports = routes
