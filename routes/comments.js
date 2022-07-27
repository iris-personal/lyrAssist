var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');


router.put('/:id', isLoggedIn, commentsCtrl.update);
router.post('/:id', isLoggedIn, commentsCtrl.create);
router.delete('/:id', isLoggedIn, commentsCtrl.delete);

module.exports = router;