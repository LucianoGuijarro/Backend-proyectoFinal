const User = require('../Models/usersModel');


const loginController = async (req, res) => {
  const { correoUser, passwordUser } = req.body
  // verificando si existe el usuario en la base de datos
  const user = await User.findOne( {correoUser} )
  // console.log(emailUser);
  console.log(user)
  try {
    if (!user){
      return res.status(401).json("Datos incorrectos")
    }
    if(passwordUser === user.passwordUser){
      return res.status(200).json("logeado con exito")
    }else {
     return  res.status(401).json("Datos incorrectos")
    }
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  loginController
}