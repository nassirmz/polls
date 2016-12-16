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
    const queryStr = 'Select * from users where name = $1 and email = $2;';
    const { name, password, email } = req.body;
    db.query(queryStr, [name, email])
      .then((rows) => {
        return bcrypt.compare(password, rows[0].password);
      })
      .then((result) => {
        if (result === true) {
          const token = jwt.sign({ name, email }, 'querty098');
          return res.json({ name, email, token });
        }
        return res.status(401).json(new Error('Invalid credentials'));
      })
      .catch((err) => {
        next(err);
      });
  },
  deleteUser(req, res, next) {
    const queryStr = 'delete from users where email = $1 and name = $2 and password = $3 returning name, email;';
    const { name, email, password } = req.body;
    const hashedPwd = helpers.hashPassword(password);
    db.query(queryStr, [email, name, hashedPwd])
      .then((rows) => {
        res.status(202).json(rows[0]);
      })
      .catch((err) => {
        next(err);
      });
  },
  logoutUser(req, res) {
    res.redirect('/');
  },
};
