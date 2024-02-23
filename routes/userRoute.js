const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

// router.post('/auth', userController.authentification);
// router.get('/getUser/:id', userController.getUser);
router.get('/getAllUsers', userController.getAllUsers);
router.post('/createUser', userController.register);

module.exports = router;