const Categoria = require('../Models/categorias.modelo');

const verCategorias = async (req, res) => {
    const categorias = await Categoria.find({});
    try {
        res.status(200).json(categorias)
    } catch (error) {
        res.status(400).json('error')
    }
}

const agregarCategoria = async (req, res) => {
    const { nombre } = req.body;
    try {
        const categoria = new Categoria ({
            nombre: nombre
        })
        const nuevaCategoria = await categoria.save();
        res.status(201).json('La categoria se ha creado exitosamente')
    } catch (error) {
        res.status(400).json(error)
    }
};
const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const existeCategoria = await Categoria.findById(id);
        if (existeCategoria) {
            res.status(200).json('Categoria eliminada')
            const resultado = await Categoria.findByIdAndRemove(id);
        } else {
            return res.status(400).json('La categoria no existe')
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}

module.exports = {
    agregarCategoria,
    verCategorias,
    eliminarCategoria
}