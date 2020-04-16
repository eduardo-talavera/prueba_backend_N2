const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

require('dotenv').config({ path: 'variables.env'});

// creando el servidor
const app = express();


// Habilitar bodyParser para leer el req body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use('/', routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// iniciar app
app.listen(port, host, () => {
    console.log('El servidor esta funcionando en el puerto:', port);
});