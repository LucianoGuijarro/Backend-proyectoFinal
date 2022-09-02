const Comentario = require ('../Models/comentarios.modelo')

const agregarComentario = async (req, res) => {
    const { usuario, juegoPerteneciente, contenido  } = req.body;
    console.log(usuario, juegoPerteneciente, contenido)
    try {
        const comentario = new Comentario ({
            usuario: usuario,
            juegoPerteneciente: juegoPerteneciente,
            contenido: contenido
        })
        const nuevoComentario = await comentario.save();
        
        res.status(201).json({mensaje: 'Comentario creado con exito', nuevoComentario})
    } catch (error) {
        res.status(400).json('No se pudo enviar el comentario')
    }
}

const verComentariosPorJuego = async (req, res) => {
    const {  juegoPerteneciente  } = req.params;
    
    try {
        const comentariosDelJuego = await Comentario.find({ juegoPerteneciente })
       

        res.status(200).json(comentariosDelJuego)
    } catch (error) {
        res.status(400).json('No se pudo enviar el comentario')
    }
}

module.exports = {
    agregarComentario,
    verComentariosPorJuego
}