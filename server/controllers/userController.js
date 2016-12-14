const db = require('../db');
const helpers = require('../utils/helpers.js');
const jwt = require('jsonwebtoken');

module.exports = {
  createUser(req, res, next) {
    const queryStr = 'Insert into users (name, email, password) values ($1, $2, $3) returning id, name, email;';
    const { name, email, password } = req.body;
    const hashedPwd = helpers.hashPassword(password);
    db.query(queryStr, [name, email, hashedPwd])
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        next(err);
      });
  },
  loginUser(req, res, next) {
    const queryStr = 'Select * from users where name = $1 and password = $2';
    const { name, password } = req.body;
    const hashedPwd = helpers.hashPassword(password);
    db.query(queryStr, [name, hashedPwd])
      .then((data) => {
        // create a token and send it
        const token = jwt.sign({ name }, 'mynameistom');
        console.log(token, data,  'TOKEN');
        res.json({ ...data, token });
      })
      .catch((err) => {
        next(err);
      });
  },
};
