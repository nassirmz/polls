const user = require('../controllers/userController');

module.exports = (app) => {
  app.route('/users')
    .post(user.createUser)
    .delete(user.checkAuth, user.deleteUser);
  app.route('/users/login')
    .post(user.loginUser);
  app.route('/users/logout')
    .get(user.checkAuth, user.logoutUser);
};
