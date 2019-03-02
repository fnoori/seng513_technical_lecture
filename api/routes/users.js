const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.post('/add_new_user', usersController.add_new_user);

module.exports = router;
