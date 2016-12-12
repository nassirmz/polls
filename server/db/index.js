const promise = require('bluebird');

const options = {
  promiseLib: promise,
  pgFormatting: true
};

const pgp = require('pg-promise')(options);

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/pollsDigest';

const db = pgp(connectionString);

db.connect();
module.exports = db;
