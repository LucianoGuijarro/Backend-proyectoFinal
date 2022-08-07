//validacion para ve si el usuario existe
const User = require('../Models/usersModel')

const emailExist = async (correoUser) =>{
    const userExist = await User.findOne({correoUser})

    if(userExist){
        throw new Error("El email ya se encuentra registrado")
    }
    return false
}

module.exports = {
    emailExist
}