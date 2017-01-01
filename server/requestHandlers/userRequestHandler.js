const jwt = require('jsonwebtoken');

const controllers = require('../controllers/userController');

module.exports = {
  createUser(req, res, next) {
    const token = jwt.sign({ email: req.body.email }, 'querty098');
    controllers.createUserController(req.body)
      .then((user) => {
        res.status(201).header('Auth', token).json(user);
      })
      .catch(next);
  },

  deleteUser(req, res, next) {
    controllers.deleteUserController(req.body.email, next)
      .then((user) => {
        console.log(user, 'user');
        res.json(user);
      })
      .catch(next);
  },
};