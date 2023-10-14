const routes = require('express').Router();

const controllers = require('../controllers/owner')

routes.get('/', controllers.getAllOwners)
routes.post('/', controllers.addNewOwner)
routes.get('/:id', controllers.getSingleOwner)

module.exports = routes
