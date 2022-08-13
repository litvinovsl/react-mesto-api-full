const errorRouter = require('express').Router();
const NotFoundError = require('../errors/not-found-err');

errorRouter.all('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена.'));
});

module.exports = errorRouter;
