const routes = require('express').Router();

const controllers = require('../controllers/shoes')

routes.get('/', controllers.getAllShoes)
routes.post('/', controllers.addNewShoe);

module.exports = routes