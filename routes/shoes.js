const routes = require('express').Router();

const controllers = require('../controllers/shoes')

routes.get('/', controllers.getAllShoes)
routes.post('/', controllers.addNewShoe);
routes.get('/:id', controllers.getSingleShoe);
routes.put('/:id', controllers.updateShoe)

module.exports = routes