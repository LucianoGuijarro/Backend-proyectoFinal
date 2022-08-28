const User = require('../Models/usersModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')


const loginController = async (req, res) => {
  const { correoUser, passwordUser } = req.body
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() })
  }

  const user = await User.findOne({ correoUser })


  if (user == null) {
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
      const token = jwt.sign(payload, process.env.SECRET, {
        expiresIn: 86400
      })

      return res.status(200).json({ msg: "Usuario Logeado", token: token, nickName: user.nickNameUser, rol: user.rol })
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