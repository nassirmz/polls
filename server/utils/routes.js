const user = require('../controllers/userController');

module.exports = (app) => {
  app.route('/users')
    .post(user.createUser);
  app.route('/users/login')
    .post(user.loginUser);
};
