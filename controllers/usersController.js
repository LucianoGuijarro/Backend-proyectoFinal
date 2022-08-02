const user = require('../Models/usersModel');

const createNewUser = async (req, res) => {
  const { userName, paswordUser, countryUser } = req.body;
  try {
    const user = new User({
      userName: userName,
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