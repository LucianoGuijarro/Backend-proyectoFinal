const { restart } = require('nodemon');
const Juego = require('../Models/juego.modelo');

const verJuegos = async (req, res) => {
    try {
        const juegos = await Juego.find({}).sort("nombre")
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
};
const verJuegoDetalle = async (req, res) => {
    try {
        const { id } = req.params;
        const juego = await Juego.findById(id)
        res.status(200).json(juego)
    } catch (error) {
        res.status(400).json(error)
    }
}
const verJuegosCategoria = async (req, res) => {
    try {
        const { categoria } = req.params;
        const juegos = await Juego.find({ categoria }).sort("nombre").limit(5)
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
};
const verTodosCategoria = async (req, res) => {
    try {
        const { categoria } = req.params;
        const juegos = await Juego.find({ categoria }).sort("nombre")
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
};
const verDestacados = async (req, res) => {
    try {
        const juegos = await Juego.find({destacado});
        res.status(200).json(juegos)
    } catch (error) {
        res.status(400).json(error)
    }
}

const agregarJuego = async (req, res) => {
    const { nombre, sinopsis, fechaLanzamiento, categoria, precio, portada, trailer } = req.body;
    try {
        const juego = new Juego({
            nombre: nombre,
            sinopsis: sinopsis,
            fechaLanzamiento: fechaLanzamiento,
            categoria: categoria,
            precio: precio,
            portada: portada,
            trailer: trailer
        })
        const nuevoJuego = await juego.save();
        res.status(201).json('Juego agregado correctamente')
    } catch (error) {
        res.status(400).json(error)
    }
};

const eliminarJuego = async (req, res) => {
    const { id } = req.params;
    try {
        const existeJuego = await Juego.findById(id);
        if (existeJuego) {
            res.status(200).json('Juego eliminado')
            const resultado = await Juego.findByIdAndRemove(id);
        } else {
            return res.status(400).json('El juego no existe')
        }
    } catch (error) {
        return res.status(400).json(error)
    }
};

const editarJuego = async (req, res) => {
    const { id } = req.params;
    const { precio, portada, trailer} = req.body
    try {
        const juegoEditado = await Juego.findByIdAndUpdate(id, {
            precio: precio,
            portada: portada,
            trailer: trailer
        })
        res.status(200).json(juegoEditado)
    } catch (error) {
        res.status(400).json(error)
    }
};
module.exports = {
    verJuegos,
    agregarJuego,
    verJuegosCategoria,
    verTodosCategoria,
    verJuegoDetalle,
    eliminarJuego,
    verDestacados,
    editarJuego
};