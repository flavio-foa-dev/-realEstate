const { Router } = require('express');
const UserController = require('../controllers/UsersController');

const routerUser = Router();

routerUser.get('/api/users/deleted', UserController.getUsersDeleted);
routerUser.get('/api/users', UserController.getUsers);
routerUser.get('/api/users/:id', UserController.getUser);

routerUser.post('/api/users', UserController.createUser);
routerUser.put('/api/users/:id', UserController.updateUser);
routerUser.delete('/api/users/:id', UserController.deleteUser);

module.exports = routerUser;
