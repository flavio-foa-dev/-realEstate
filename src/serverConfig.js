const express = require('express');
const routes = require('./api/routes');

const app = express();

routes(app);

module.exports = app;
