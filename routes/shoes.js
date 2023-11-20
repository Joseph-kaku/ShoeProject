const routes = require('express').Router();
const controllers = require('../controllers/shoes')
const regValidate = require('../utilities/validate')

routes.get('/', (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.getAllShoes(req, res);
});

routes.post('/', regValidate.shoeRules(), regValidate.checkShoeData, (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.addNewShoe(req, res);
});

routes.get('/:id', (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.getSingleShoe(req, res);
}); 

routes.put('/:id', regValidate.shoeRules(), regValidate.checkShoeData, (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.updateShoe(req, res);
});

routes.delete('/:id', (req, res) => {
/*
#swagger.tags = ['Shoes']
*/
    controllers.deleteShoe(req, res);
});

module.exports = routes