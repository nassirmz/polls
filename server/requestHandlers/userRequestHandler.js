const jwt = require('jsonwebtoken');

const controllers = require('../controllers/userController');

module.exports = {
  createUser(req, res, next) {
    const token = jwt.sign({ email: req.body.email }, 'querty098');
    controllers.createUserController(req.body, next)
      .then((user) => {
        res.status(201).header('Auth', token).json(user);
      })
      .catch(next);
  },

  deleteUser(req, res, next) {
    controllers.deleteUserController(req.email, next)
      .then((user) => {
        res.json(user);
      })
      .catch(next);
  },
};