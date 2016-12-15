const db = require('../db');
const helpers = require('../utils/helpers.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  createUser(req, res, next) {
    const queryStr = 'Insert into users (name, email, password) values ($1, $2, $3) returning id, name, email;';
    const { name, email, password } = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds)
      .then((hashedPwd) => {
        console.log('hashedPWd', hashedPwd);
        return db.query(queryStr, [name, email, hashedPwd]);
      })
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        next(err);
      });
  },
  loginUser(req, res, next) {
    const queryStr = 'Select * from users where name = $1 and email = $2 and password = $3;';
    const { name, password, email } = req.body;
    const hashedPwd = helpers.hashPassword(password);
    db.query(queryStr, [name, email, hashedPwd])
      .then((rows) => {
        if (rows.length === 0 || rows[0].password !== hashedPwd) {
          return next(new Error('Invalid credentials'));
        }
        const token = jwt.sign({ name, email }, 'mynameitdom');
        return res.json({ name, email, token });
      })
      .catch((err) => {
        next(err);
      });
  },
  deleteUser(req, res, next) {
    const queryStr = 'delete from users where email = $1 and name = $2 and password = $3 returning name, email;';
    const { name, email, password } = req.body;
    const hashedPwd = helpers.hashPassword(password);
    console.log(hashedPwd, 'hashedPwd', req.body);
    db.query(queryStr, [email, name, hashedPwd])
      .then((rows) => {
        console.log(rows, 'Its Not deleting. I dont no why');
        res.status(202).json(rows[0]);
      })
      .catch((err) => {
        next(err);
      });
  },
};
