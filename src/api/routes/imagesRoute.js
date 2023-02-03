const { Router } = require('express');
const ImageController = require('../controllers/ImagesController');

const routerImage = Router();

routerImage.get('/api/images', ImageController.getImages);
routerImage.post('/api/images', ImageController.createImage);
routerImage.delete('/api/images/:id', ImageController.deleteImage);

module.exports = routerImage;
