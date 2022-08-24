const jwt = require('jsonwebtoken');
const ensureUser = async (req, res, next) => {
    const { token } = req.headers
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if(err) {
            return res.status(401).json('No esta autorizado para hacer esta funcion')
        }
        next()
      });
};

module.exports = {
    ensureUser
}