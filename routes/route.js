const routes = require('express').Router();


routes.use('/shoes', require('./shoes'))
routes.use('/owners', require('./owners'))

module.exports = routes