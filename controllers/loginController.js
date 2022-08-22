const User = require('../Models/usersModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
// const { LocalStorage } = require('node-localstorage');


const loginController = async (req, res) => {
  const { correoUser, passwordUser } = req.body
  // verificando si existe el usuario en la base de datos
  const user = await User.findOne( {correoUser})

  console.log(correoUser);
  // console.log(user.nickNameUser)

  if(user == null){
    return res.status(400).json("El usuario no existe")
  }
  const match = bcrypt.compareSync(passwordUser, user.passwordUser)
  console.log(match)
    
  try {
    if (match) {
      const payload = {
        id: user._id,
        correoUser: user.correoUser,
        nickNameUser: user.nickNameUser,
        countryUser: user.countryUser,
        rol: user.rol
      }
      const token = jwt.sign(payload, process.env.SECRET,{
        expiresIn: "2 days"
      })

      return res.status(200).json({msg:"Usuario Logeado", token: token, nickName: user.nickNameUser, rol: user.rol})
    } else {
      return res.status(401).json("Usuario o contraseña incorrecta")
    }

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  loginController
}