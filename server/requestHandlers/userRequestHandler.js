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
        res.json(user);
      })
      .catch(next);
  },

  loginUser(req, res, next) {
    const token = jwt.sign({ email: req.body.email }, 'querty098');
    controllers.loginUserController(req.body, next)
      .then((result) => {
        if (result === true) {
          return res.status(302).header('Auth', token).json(req.body.name);
        }
        return next({ status: 401, message: 'Invalid Crendentials' });
      })
      .catch(next);
  },

  logoutUser(req, res) {
    res.redirect('/');
  },

  checkAuth(req, res, next) {
    const token = req.get('Auth') || '';
    const { email } = jwt.verify(token, 'querty098');
    controllers.checkAuthController(email)
      .then((result) => {
        if (result.length === 0) {
          return next({ status: 401, message: 'Unauthorized Access' });
        }
        return next();
      })
      .catch(next);
  },
};