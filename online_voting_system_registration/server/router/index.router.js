const express = require('express');
const router = express.Router();

const ctrlUser = require('../controller/user.controller');

router.post('/register', ctrlUser.register);

module.exports = router
