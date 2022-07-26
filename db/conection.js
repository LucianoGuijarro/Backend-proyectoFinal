const mongoose = require('mongoose');

const conectionDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('conexion exitosa')
    } catch (error) {
        console.log(error)
    }
}

conectionDB()