const express = require('express');
const router = express.Router();
const Jwtverify = require('../config/jwt')
const ctrlUser = require('../controller/user.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userprofile',Jwtverify.verifyJwtToken,ctrlUser.userprofile);


module.exports = router
