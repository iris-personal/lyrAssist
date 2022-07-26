var express = require('express');
var router = express.Router();
const profilesCtrl = require('../controllers/profiles');

// GET /lyrAssist/profiles/:id
router.get('/:id', profilesCtrl.show);

module.exports = router;