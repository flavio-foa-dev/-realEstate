const express = require('express');
const routerUser = require('./api/routes/usersRoute');
const routerPropertie = require('./api/routes/propertiesRoute');
const routerImage = require('./api/routes/imagesRoute');

const app = express();

app.use(express.json());
app.use(routerUser);
app.use(routerPropertie);
app.use(routerImage);
// app.use(httpErrorMiddleware)

module.exports = app;
