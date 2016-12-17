const express = require('express');

const app = express();
const helpers = require('./utils/helpers');

require('./utils/middleware')(app, express);
require('./utils/routes')(app);

// use error handling middleware
app.use(helpers.errorHandler);

module.exports = app;
