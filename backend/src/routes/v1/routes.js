const express = require('express');
const router = express.Router();

const userController = require('../../src/controller/users');
router.get('/users', userController.getAllUsers); 

module.exports = router;



