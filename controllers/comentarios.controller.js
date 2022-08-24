const Comentario = require ('../Models/comentarios.modelo')

const agregarComentario = async (req, res) => {
    const { usuario, juegoPerteneciente, contenido  } = req.params;
    try {
        const comentario = new Comentario ({
            usuario: usuario,
            juegoPerteneciente: juegoPerteneciente,
            contenido: contenido
        })
        const nuevoComentario = await comentario.save();
        res.status(201).json('Comentario creado con exito')
    } catch (error) {
        res.status(400).json('No se pudo enviar el comentario')
    }
}

module.exports = {
    agregarComentario
}