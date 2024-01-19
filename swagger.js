const swaggerAutogen = require('swagger-autogen')();

const doc = {
info: {
    title: 'SHOES API',
    description: 'Description',
},
host: 'shoeproject.onrender.com',
schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/route'];


swaggerAutogen(outputFile, endpointsFiles, doc);