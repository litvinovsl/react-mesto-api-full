const cardRouter = require('express').Router();
const {
  validatorCreateCard,
  validatorCardId,
} = require('../middlewares/validator');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  deleteLikeCard,
} = require('../controllers/card');

cardRouter.get('/cards', getCards);
cardRouter.post('/cards', validatorCreateCard, createCard);
cardRouter.delete('/cards/:cardId', validatorCardId, deleteCard);
cardRouter.put('/cards/:cardId/likes', validatorCardId, likeCard);
cardRouter.delete('/cards/:cardId/likes', validatorCardId, deleteLikeCard);

module.exports = cardRouter;
