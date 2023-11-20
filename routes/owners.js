const routes = require('express').Router();
const controllers = require('../controllers/owner')
const regValidate = require('../utilities/validate')

routes.get('/', (req, res) => {
/*
#swagger.tags = ['Owners']
*/
controllers.getAllOwners(req, res);
});

routes.post('/', regValidate.ownerRules(), regValidate.checkOwnerData, (req, res) => {
/*
#swagger.tags = ['Owners']
*/
controllers.addNewOwner(req, res);
});

routes.get('/:id', (req, res) => {
/*
#swagger.tags = ['Owners']
*/
    controllers.getSingleOwner(req, res);
});
routes.put('/:id', regValidate.ownerRules(), regValidate.checkOwnerData, (req, res) => {
/*
#swagger.tags = ['Owners']
*/
controllers.updateOwner(req, res);
});

routes.delete('/:id', (req, res) => {
/*
#swagger.tags = ['Owners']
*/
controllers.deleteOwner(req, res);
});

module.exports = routes
