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
const eliminarComentario = async (req, res) => {
    const { id } = req.params;
    try {
        const existeComentario = Comentario.find(id);
        if(existeComentario){
            res.status(200).json('El comentario fue eliminado con exito')
            const resultado = await Comentario.findByIdAndRemove(id)
        }else{
            return res.status(400).json('El comentario no existe')
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}
module.exports = {
    agregarComentario,
    verComentariosPorJuego,
    eliminarComentario
}