const user = require('../controllers/userController');

module.exports = (app) => {
  app.route('/users')
    .post(user.createUser);
};
