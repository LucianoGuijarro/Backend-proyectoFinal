const User = require('../Models/usersModel');

const createNewUser = async (req, res) => {
  const { userName, paswordUser,nickNameUser, countryUser } = req.body;
  try {
    // console.log( req.body )
    const user = new User({
      userName: userName,
      nickNameUser: nickNameUser,
      paswordUser: paswordUser,
      countryUser: countryUser
    })
    const newUser = await user.save();
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  createNewUser
}