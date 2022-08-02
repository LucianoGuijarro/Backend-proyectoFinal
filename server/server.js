const express = require('express');
const app = express();
require('dotenv').config();
require('../db/conection');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT;
const juegosRoute = require('../routes/juegos');
const usersRoute = require('../routes/users')



app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/juegos', juegosRoute)
app.use('/user', usersRoute)

app.listen(port , () => {
    console.log(`Estamos escuchando al puerto ${port}`)

}); 

