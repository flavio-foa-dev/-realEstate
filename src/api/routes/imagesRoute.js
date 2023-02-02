const { Router } = require('express');
const ImageController = require('../controllers/ImagesController');

const routerImage = Router();

// routerUser.get('/api/users/deleted', UserController.getUsersDeleted);
routerImage.get('/api/images', ImageController.getImages);
// routerUser.get('/api/users/:id', UserController.getUser);

// routerUser.post('/api/users', UserController.createUser);
// routerUser.put('/api/users/:id', UserController.updateUser);
// routerUser.delete('/api/users/:id', UserController.deleteUser);

module.exports = routerImage;
