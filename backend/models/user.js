const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const UnauthorizedError = require('../errors/unauthorized-err');

const userSchema = new mongoose.Schema({
  name: {
    type: String, // строка
    minlength: [2, 'Должно быть от 2 до 30 символов'], // минимальная длина имени — 2 символа
    maxlength: [30, 'Должно быть от 2 до 30 символов'], // а максимальная — 30 символов
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String, // строка
    minlength: [2, 'Должно быть от 2 до 30 символов'], // минимальная длина имени — 2 символа
    maxlength: [30, 'Должно быть от 2 до 30 символов'], // а максимальная — 30 символов
    default: 'Исследователь',
  },
  avatar: {
    type: String, // строка
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator(v) {
        return /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*/gm.test(v);
      },
      message: 'Введите URL адрес',
    },
  },
  email: {
    type: String,
    required: [true, 'Введите email'],
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Введен некорректный email',
    },
  },
  password: {
    type: String,
    required: [true, 'Введите пароль'],
    select: false,
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (user === null) {
        throw new UnauthorizedError('Неверная почта или пароль');
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError('Неверная почта или пароль');
          }

          return user;
        });
    });
};

module.exports = mongoose.model('User', userSchema);
