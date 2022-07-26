var express = require('express');
var router = express.Router();
const profilesCtrl = require('../controllers/profiles');
// GET /lyrAssist/userid/profile 
router.get('/:id/profile', profilesCtrl.show);

module.exports = router;