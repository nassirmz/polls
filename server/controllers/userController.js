const db = require('../db');
const helpers = require('../utils/helpers.js');

module.exports = {
  createUser(req, res, next) {
    let queryStr = 'Insert into users (name, email, password) values ($1, $2, $3) returning id;';
    console.log('what is req body', req.body);
    let { name, email, password } = req.body;
    let hashed_pwd = helpers.hashPassword(password);
    console.log('from database', name, email, hashed_pwd);
    db.query(queryStr, [name, email, hashed_pwd])
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        next(err);
      })
  }
}
