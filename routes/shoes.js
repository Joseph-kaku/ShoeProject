const routes = require('express').Router();
const controllers = require('../controllers/shoes')
const regValidate = require('../utilities/validate')

routes.get('/', controllers.getAllShoes)
routes.post('/', 
regValidate.addNewShoeRules(),
regValidate.checkShoeData,
controllers.addNewShoe);
routes.get('/:id',
regValidate.addNewShoeRules(),
regValidate.checkShoeData, 
controllers.getSingleShoe);
routes.put('/:id', controllers.updateShoe)
routes.delete('/:id', controllers.deleteShoe)

module.exports = routes