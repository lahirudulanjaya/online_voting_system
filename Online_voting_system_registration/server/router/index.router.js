const express = require('express');
const router = express.Router();
const Jwtverify = require('../config/jwt')
const ctrlUser = require('../controller/user.controller');
const ctrlElection =require('../controller/election.controller');
const ctrlRules = require('../controller/rules.controller');

router.post('/register', ctrlUser.register);
router.post('/setelection',ctrlElection.setelection);
router.post('/authenticate',ctrlUser.authenticate);
router.post('/setrules',ctrlRules.setrules);
router.get('/userprofile',Jwtverify.verifyJwtToken,ctrlUser.userprofile);


module.exports = router
