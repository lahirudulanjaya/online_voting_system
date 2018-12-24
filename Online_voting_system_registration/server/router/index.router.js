const express = require('express');
const router = express.Router();
const Jwtverify = require('../config/jwt')
const ctrlUser = require('../controller/user.controller');
const ctrlElection = require('../controller/election.controller');
const ctrlRules = require('../controller/rules.controller');
const ctrlEmail = require('../controller/email.controller');
const ctrlToken = require('../controller/token.controller');
const ctrlCandidate= require('../controller/candidate.controller');
const ctrlRsa = require('../controller/pki.controller');


router.post('/register', ctrlUser.register);
router.post('/setelection',ctrlElection.setelection);
router.post('/authenticate',ctrlUser.authenticate);
router.post('/setrules',ctrlRules.setrules);
router.get('/userprofile',Jwtverify.verifyJwtToken,ctrlUser.userprofile);
router.post('/setemail',ctrlEmail.setemail);
router.put('/verify',ctrlToken.verify);
router.get('/getuserprofiles',ctrlUser.getuserprofiles);
router.put('/updateuser',ctrlUser.putuserprofile);
router.delete('/delete/:id',ctrlUser.deleteuserprofile);
router.post('/candidate',ctrlCandidate.setcandidate);
router.get('/getkeys',ctrlRsa.getkey);
router.post('/privatekey',ctrlRsa.downloadprivate);
router.get('/isrsa/:id',ctrlEmail.pki);
router.put('/savepki',ctrlRsa.savepki);


module.exports = router
