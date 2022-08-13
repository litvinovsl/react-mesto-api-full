const usersRouter = require('express').Router();

const {
  valdatorGetUser,
  valdatorUpdateAvatar,
  valdatorUpdateProfile,
} = require('../middlewares/validator');

const {
  getUsers,
  getUser,
  getUserMe,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/user');

usersRouter.get('/users', getUsers);
usersRouter.get('/users/me', getUserMe);

usersRouter.get('/users/:userId', valdatorGetUser, getUser);
usersRouter.patch('/users/me', valdatorUpdateProfile, updateUserProfile);
usersRouter.patch('/users/me/avatar', valdatorUpdateAvatar, updateUserAvatar);

module.exports = usersRouter;
