const express = require('express');
const app = express();

require('./utils/middleware')(app, express);
require('./utils/routes')(app);

module.exports = app;
