const routes = require('express').Router();

const controllers = require('../controllers/owner')

routes.get('/', controllers.getAllOwners)
routes.post('/', controllers.addNewOwner)

module.exports = routes
