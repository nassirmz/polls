const helpers = require('./helpers');

module.exports = (app) => {
  app.route('/users')
    .post(helpers.createUser);
}
