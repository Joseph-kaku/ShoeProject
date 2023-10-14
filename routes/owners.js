const routes = require('express').Router();

const controllers = require('../controllers/owner')

routes.get('/', controllers.getAllOwners)
routes.post('/', controllers.addNewOwner)
routes.get('/:id', controllers.getSingleOwner)
routes.put('/:id', controllers.updateOwner)
routes.delete('/:id', controllers.deleteOwner)

module.exports = routes
