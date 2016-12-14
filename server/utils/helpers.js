const bcrypt = require('bcrypt');

// Create a password salt
const salt = bcrypt.genSaltSync(10);

module.exports = {
  hashPassword(passwordFromUser) {
    return bcrypt.hashSync(passwordFromUser, salt);
  },
};
