const bcrypt = require('bcrypt');

//Create a password salt
const salt = bcrypt.genSaltSync(10);

module.exports = {
  hashPassword(passwordFromUser) {
    return bcrypt.hashSync(passwordFromUser, salt);
  },
  checkForPassword(passwordFromUser, rows) {
    //if password matches
    if (bcrypt.hashSync(passwordFromUser, salt) === rows[0].password) {
      return true;
    }
    
    return false;
  }
}
