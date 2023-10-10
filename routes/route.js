const routes = require('express').Router();


routes.use('/shoes', require('./shoes'))
routes.use('/owners', require('./owners'))
// routes.get('/:id', controllers.getSingle)

module.exports = routes