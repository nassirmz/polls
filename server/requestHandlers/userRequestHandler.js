const jwt = require('jsonwebtoken');

const controllers = require('../controllers/userController');

module.exports = {
  createUser(req, res, next) {
    const token = jwt.sign({ email: req.body.email }, 'querty098');
    controllers.createUserController(req.body)
      .then((user) => {
        user.token = token;
        res.json(user);
      })
      .catch(next);
  },
};