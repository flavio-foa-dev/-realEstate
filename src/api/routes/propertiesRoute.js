const { Router } = require('express');
const PropertieController = require('../controllers/PropertiesController');

const routerPropertie = Router();

routerPropertie.get('/api/properties/deleted', PropertieController.getPropertieDeleted);
routerPropertie.get('/api/properties/owners/:userId', PropertieController.getPropertieUser);
routerPropertie.get('/api/properties', PropertieController.getProperties);
routerPropertie.get('/api/properties/:id', PropertieController.getPropertie);

routerPropertie.post('/api/properties', PropertieController.createPropertie);
routerPropertie.put('/api/properties/:id', PropertieController.updatePropertie);
routerPropertie.delete('/api/properties/:id', PropertieController.deletePropertie);

module.exports = routerPropertie;
