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
        const token = jwt.sign({ email }, 'querty098');
        return res.header('Auth', token).json(rows[0]);
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
          return res.status(302).header('Auth', token).json({ email });
        }
        return next({ status: 401, message: 'Invalid Crendentials' });
      })
      .catch((err) => {
        next(err);
      });
  },
  deleteUser(req, res, next) {
    const queryStr = 'delete from users where email = $1;';
    const { email } = req.body;
    db.query(queryStr, [email])
      .then((rows) => {
        if (rows.length === 0) {
          return next({ status: 404, message: 'User not found' });
        }
        return res.json(rows[0]);
      })
      .catch((err) => {
        next(err);
      });
  },
  logoutUser(req, res) {
    res.redirect('/');
  },
};
