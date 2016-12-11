const express = require('express');
const app = express();

require('./utils/middleware')(app, express);
require('./utils/routes')(app, express);

module.exports = app;
