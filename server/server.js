const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT;
const juegosRoute = require('../routes/juegos');
const categoriasRoute = require ('../routes/categorias.js');
require('../db/conection');



app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/juegos', juegosRoute)
app.use('/categorias', categoriasRoute)


app.listen(port , () => {
    console.log(`Estamos escuchando al puerto ${port}`)
});