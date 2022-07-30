const Juego = require('../Models/juego.modelo');

const verJuegos = async (req, res) => {
    try {
        const juegos = await Juego.find({}).sort("nombre")
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
};
const verJuegosCarreras = async (req, res) => {
    try {
        const juegos = await Juego.find({categoria: 'carreras'}).limit(4).sort("nombre");
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
}
const verJuegosAccion = async (req, res) => {
    try {
        const juegos = await Juego.find({categoria: 'accion'}).limit(4).sort("nombre");
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
}
const verJuegosAventura = async (req, res) => {
    try {
        const juegos = await Juego.find({categoria: 'aventura'}).limit(4).sort("nombre");
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
}

const agregarJuego = async (req, res) => {
    const { nombre, sinopsis, fechaLanzamiento, categoria, precio, portada} = req.body;
    try {
        const juego = new Juego ({
            nombre: nombre,
            sinopsis: sinopsis,
            fechaLanzamiento: fechaLanzamiento,
            categoria: categoria,
            precio: precio,
            portada: portada
        })
        const nuevoJuego = await juego.save();
        res.status(201).json('Juego agregado correctamente')
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    verJuegos,
    agregarJuego,
    verJuegosCarreras,
    verJuegosAccion,
    verJuegosAventura
};