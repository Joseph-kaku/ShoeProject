const routes = require('express').Router();
const controllers = require('../controllers/owner')
const regValidate = require('../utilities/validate')

routes.get('/', controllers.getAllOwners)
routes.post('/', 
regValidate.addNewOwnerRules(), 
regValidate.checkOwnerData,
controllers.addNewOwner)
routes.get('/:id', controllers.getSingleOwner)
routes.put('/:id',
regValidate.addNewOwnerRules(), 
regValidate.checkOwnerData, 
controllers.updateOwner)
routes.delete('/:id', controllers.deleteOwner)

module.exports = routes
