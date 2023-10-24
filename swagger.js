const swaggerAutogen = require('swagger-autogen')();

const doc = {
info: {
    title: 'My API',
    description: 'Description',
},
host: process.env.swaggerURL,
schemes: ['http','https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/route'];


swaggerAutogen(outputFile, endpointsFiles, doc);