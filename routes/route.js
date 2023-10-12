const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

// routes.use('/', require())
routes.use('/shoes', require('./shoes'))
routes.use('/owners', require('./owners'))

module.exports = routes