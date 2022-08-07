const User = require('../Models/usersModel');
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const createNewUser = async (req, res) => {
  const { correoUser, passwordUser, nickNameUser, countryUser } = req.body;

  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
    // return res.status(400).json('Este mail ya se encuentra en uso')
  }

  try {
    // console.log( req.body )
    const user = new User({
      correoUser: correoUser,
      nickNameUser: nickNameUser,
      passwordUser: passwordUser,
      countryUser: countryUser
    })

    const salt = bcrypt.genSaltSync(10)
    //aca es donde se encripta la contraseña, agarro el modelo y le inyecto lo que viene de front + el salt
    user.passwordUser = bcrypt.hashSync(passwordUser, salt )
    //aca se crea el usuario y se envia al back
    const newUser = await user.save(); //save es un metodo de express
    res.status(201).json('usuario creado')
  } catch (error) {
    res.status(400).json(error)
  }
}

const verTodos = async (req, res) => {
  try {
    const usuarios = User.find({}).sort('nombre')
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getUserById = ()=>{}

module.exports = {
  createNewUser,
  verTodos,
  getUserById
}