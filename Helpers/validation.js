//validacion para ve si el usuario existe
const User = require('../Models/usersModel')

const emailExist = async (correoUser) =>{
    const userExist = await User.find(correoUser)

    if(userExist !== 0){
        //generar el error
        throw new Error("El email ya se encuentra registrado")
    }
    return false
}

module.exports = {
    emailExist
}