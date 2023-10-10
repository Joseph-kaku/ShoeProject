const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080

app.use(bodyParser.json());
app.use('/', require('./routes/route'));

app.listen(port, () => {
    console.log(`Server is running on Port http://localhost:${port}`)
});