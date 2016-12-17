const db = require('../db');
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
        res.status(201).json(rows);
      })
      .catch((err) => {
        next(err);
      });
  },
  loginUser(req, res, next) {
    const queryStr = 'Select * from users where email = $1;';
    const { email, password } = req.body;
    db.query(queryStr, [email])
      .then((rows) => {
        if (rows.length === 0) {
          return next({ status: 401, message: 'Invalid Crendentials' });
        }
        return bcrypt.compare(password, rows[0].password);
      })
      .then((result) => {
        if (result === true) {
          const token = jwt.sign({ email }, 'querty098');
          return res.status(302).json({ email, token });
        }
        return next({ status: 401, message: 'Invalid Crendentials' });
        // return res.status(401).json(new Error('Invalid credentials'));
      })
      .catch((err) => {
        next(err);
      });
  },
  deleteUser(req, res, next) {
    const queryStr1 = 'delete from users where email = $1;';
    const queryStr2 = 'Select * from users where email = $1;';
    const { name, password } = req.body;
  },
  logoutUser(req, res) {
    res.redirect('/');
  },
};
