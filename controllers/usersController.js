const User = require('../Models/usersModel');
const { validationResult } = require('express-validator')

const createNewUser = async (req, res) => {
  const { correoUser, passwordUser,nickNameUser, countryUser } = req.body;

  // const errors = validationResult(req)

  // if(!errors.isEmpty()){
  //   return res.status(400).json({errors: errors.array()})
  // }

  try {
    // console.log( req.body )
    const user = new User({
      correoUser: correoUser,
      nickNameUser: nickNameUser,
      passwordUser: passwordUser,
      countryUser: countryUser
    })
    const newUser = await user.save();
    res.status(201).json('usuario creado')
  } catch (error) {
    res.status(400).json(error)
  }
}

const getAllUsers =()=>{

}

const getUserById = ()=>{}

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById
}