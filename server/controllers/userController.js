const db = require('../db');

module.exports = {
  createUser(req, res, next) {
    let queryStr = 'Insert into users (name, email, password) values ($1, $2, $3) returning id;';
    console.log('what is req body', req.body);
    let { name, email, password } = req.body;
    console.log('from database', name, email, password);
    db.query(queryStr, [name, email, password])
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        next(err);
      })
  }
}
