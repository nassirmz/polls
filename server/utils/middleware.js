const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressJWT = require('express-jwt');
const path = require('path');

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '/../../public')));
  app.use(expressJWT({ secret: 'mynameistom' }).unless({ path: ['/users/login', '/users', '/polls', '/'] }));
};
