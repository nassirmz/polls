const bcrypt = require('bcrypt');

const db = require('../db');

module.exports = {
  createUserController(user) {
    const queryStr = 'Insert into users (name, email, password) values ($1, $2, $3) returning id, name, email;';
    const { name, email, password } = user;
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds)
      .then((hashedPwd) => {
        return db.query(queryStr, [name, email, hashedPwd]);
      })
      .then((rows) => {
        return rows[0];
      });
  },

  deleteUserController(userEmail, next) {
    const queryStr = 'delete from users where email = $1 returning name, email;';
    return db.query(queryStr, [userEmail])
      .then((rows) => {
        if (rows.length === 0) {
          return next({ status: 404, message: 'User not found' });
        }
        return rows[0];
      })
      .catch(next);
  },

  loginUserController(user, next) {
    const queryStr = 'select * from users where email = $1;';
    const { email, password } = user;
    return db.query(queryStr, [email])
      .then((rows) => {
        if (rows.length === 0) {
          return next({ status: 401, message: 'Invalid Crendentials' });
        }
        return bcrypt.compare(password, rows[0].password);
      })
      .then((result) => {
        return result;
      });
  },

  // check authentication middleware. it also give a user property to request object
  checkAuthController(userEmail) {
    const queryStr = 'select * from users where email = $1;';
    return db.query(queryStr, [userEmail])
      .then((rows) => {
        return rows;
      });
  },
};
