const routes = require('express').Router();
const controllers = require('../controllers/shoes')
const regValidate = require('../utilities/validate')

routes.get('/', (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.getAllShoes
});

routes.post('/', regValidate.shoeRules(), regValidate.checkShoeData, (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.addNewShoe
});

routes.get('/:id', (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.getSingleShoe
}); 

routes.put('/:id', regValidate.shoeRules(), regValidate.checkShoeData, (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.updateShoe
});

routes.delete('/:id', (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.deleteShoe
});

module.exports = routes