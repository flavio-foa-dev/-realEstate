const { Router } = require('express');
const UserController = require('../controllers/Users');

const router = Router();

router.get('/api/users', UserController.getUsers);

module.exports = router;
