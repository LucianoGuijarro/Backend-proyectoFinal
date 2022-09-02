//validacion para ver si el usuario existe
const User = require('../Models/usersModel')
const categoria = require ('../Models/categorias.modelo')

const emailExist = async (correoUser) =>{
    const userExist = await User.findOne({correoUser})

    if(userExist){
        throw new Error("El email ya se encuentra registrado")
    }
    return false
}

const categoriaExiste = async (nombre) => {
    console.log(categoria)
    const categoriaExist = await categoria.findOne({nombre})
    console.log(categoriaExist)
    if(categoriaExist){
        throw new Error ('La categoria ya existe')
    }
}

const userSuspendido = async (correoUser) => {
    const user = await User.findOne({correoUser})
    if (user.suspendido) {
        throw new Error ('Este usuario esta baneado')
    }
    return false
}

module.exports = {
    emailExist,
    userSuspendido,
    categoriaExiste
}