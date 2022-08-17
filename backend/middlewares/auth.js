const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;
  const { NODE_ENV, JWT_SECRET } = process.env;
  const secret = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

  try {
    payload = jwt.verify(token, secret);
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  req.user = payload;

  next(); // пропускаем запрос дальше
};
