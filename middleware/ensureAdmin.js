const jwt = require('jsonwebtoken');
const ensureAdmin = async (req, res, next) => {
    const { token } = req.headers
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if(err) {
            return res.status(401).json('No esta autorizado para hacer esta funcion')
        }
        if(decoded.rol === 'admin') {
            next()
        } else {
            return res.status(403).json('Permisos insuficientes')
        }
      });
};
module.exports = {
    ensureAdmin
}