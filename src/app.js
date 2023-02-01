const express = require('express');
const routerUser = require('./api/routes/usersRoute');

const app = express();

app.use(express.json());
app.use(routerUser);
// app.use(httpErrorMiddleware)

module.exports = app;
