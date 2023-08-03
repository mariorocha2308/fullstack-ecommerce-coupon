const config = require('../config/config')
const { verify } = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

  var token = req.headers['authorization']
  if (!token) {
    return res.send({ error: 'No authorization'})
  }

  token = token.replace('Bearer ', '')

  verify(token, config.SECRET_ACCESS_TOKEN, function(err, token) {
    if (err) {
      return res.send({ error: 'Invalid token' });
    } else {
      req.token = token
      next()
    }
  });
}

module.exports = { verifyToken }