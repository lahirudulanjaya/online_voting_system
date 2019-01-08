const express = require('express');
const multer = require('multer');
const ctrlResult = require('../controller/result.controller');
const router = express.Router();
const Jwtverify = require('../config/jwt')
const ctrlUser = require('../controller/user.controller');
const ctrlElection = require('../controller/election.controller');
const ctrlRules = require('../controller/rules.controller');
const ctrlEmail = require('../controller/email.controller');
const ctrlToken = require('../controller/token.controller');
const ctrlCandidate = require('../controller/candidate.controller');
const ctrlRsa = require('../controller/pki.controller');
const ctrlVote = require('../controller/vote.controller');


var store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname);
    }
});

var upload = multer({ storage: store });



router.post('/register', ctrlUser.register);
router.post('/setelection', ctrlElection.setelection);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/setrules', ctrlRules.setrules);
router.get('/userprofile', Jwtverify.verifyJwtToken, ctrlUser.userprofile);
router.post('/setemail', ctrlEmail.setemail);
router.put('/verify', ctrlToken.verify);
router.get('/getuserprofiles', ctrlUser.getuserprofiles);
router.put('/updateuser', ctrlUser.putuserprofile);
router.delete('/delete/:id', ctrlUser.deleteuserprofile);
router.post('/candidate', ctrlCandidate.setcandidate);
router.get('/getkeys', ctrlRsa.getkey);
router.post('/privatekey', ctrlRsa.downloadprivate);
router.get('/isrsa/:id', ctrlEmail.pki);
router.put('/savepki', ctrlRsa.savepki);
router.get('/getcandidateprofiles', ctrlCandidate.getcandidateprofiles);
router.get('/getpublic/:id', ctrlEmail.getpublic);
router.post('/postvote', ctrlVote.postvote);
router.put('/updatecandiate', ctrlCandidate.putcandidateprofile);
router.delete('/deletecandidate/:id', ctrlCandidate.deletecandidateprofile);
router.post('/upload', upload.single('image'));
router.get('/countvotes', ctrlResult.totalVotes);
router.get('/countcandidates', ctrlResult.totalCandidates);
router.get('/countregisteredvoters', ctrlResult.totalRegisteredVoters);
router.get('/presidentresult', ctrlResult.presidentResult);
router.get('/vpresult', ctrlResult.vicePresidentResult);
router.get('/secretaryresult', ctrlResult.secretaryResult);
router.get('/treasurerresult', ctrlResult.treasurerResult);
router.get('/editorresult', ctrlResult.editorResult);
router.get('/committeeresult', ctrlResult.committeeResult);
router.post('/verifyotp',ctrlUser.verify);
router.get('/getvalid',ctrlUser.getverify);
router.get('/getallelections',ctrlElection.getallelections);
router.get('/getcandidatename/:id', ctrlResult.getCandidateName);
router.get('/getrules', ctrlRules.getRules);
router.put('/updaterule', ctrlRules.putRules);
router.put('/putrandom',ctrlToken.updaterandomstring);
router.get('/getcurrentelection',ctrlElection.getcurrentelection);
module.exports = router
