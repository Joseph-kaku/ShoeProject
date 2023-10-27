const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const { auth } = require('express-openid-connect');

const { requiresAuth } = require('express-openid-connect');



const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: process.env.baseURL,
    clientID: '69NCwtlBngsYRciHfCYTooXXrkEeTsl3',
    issuerBaseURL: 'https://dev-p3emw77r66837ncj.us.auth0.com'
    };
    
    // auth router attaches /login, /logout, and /callback routes to the baseURL
    routes.use(auth(config));
    
    // req.isAuthenticated is provided from the auth router
    routes.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    });

routes.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

// routes.use('/', require())
routes.use('/shoes', requiresAuth(), require('./shoes'))
routes.use('/owners',requiresAuth(), require('./owners'))

routes.use('/api-docs', requiresAuth(), swaggerUi.serve);
routes.get('/api-docs', requiresAuth(), swaggerUi.setup(swaggerDocument));

module.exports = routes