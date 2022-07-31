const Juego = require('../Models/juego.modelo');

const verJuegos = async (req, res) => {
    try {
        const juegos = await Juego.find({}).sort("nombre")
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
};
const verJuegosCategoria = async (req, res) => {
    try {
        const {categoria} = req.params;
        const juegos = await Juego.find({categoria}).sort("nombre").limit(5)
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
};
const verTodosCategoria = async (req, res) => {
    try {
        const {categoria} = req.params;
        const juegos = await Juego.find({categoria}).sort("nombre")
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
};

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
    verJuegosCategoria,
    verTodosCategoria
};