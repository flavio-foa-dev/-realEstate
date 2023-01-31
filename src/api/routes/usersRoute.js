const { Router } = require('express');
const UserController = require('../controllers/UsersController.js');

const router = Router();

router.get('/api/users', UserController.getUsers);
router.get('/api/users/:id', UserController.getUser);

module.exports = router;
