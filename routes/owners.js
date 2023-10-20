const routes = require('express').Router();
const controllers = require('../controllers/owner')
const regValidate = require('../utilities/validate')

routes.get('/', controllers.getAllOwners)
routes.post('/', 
regValidate.ownerRules(), 
regValidate.checkOwnerData,
controllers.addNewOwner)
routes.get('/:id', controllers.getSingleOwner)
routes.put('/:id',
regValidate.ownerRules(), 
regValidate.checkOwnerData, 
controllers.updateOwner)
routes.delete('/:id', controllers.deleteOwner)

module.exports = routes
