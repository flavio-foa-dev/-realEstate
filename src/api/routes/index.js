const express = require('express');
const routerUsers = require('./usersRoute.js');

module.exports = (app) => {
  app.use(express.json());
  app.use(routerUsers);
};
