var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');


router.post('/posts/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete);

module.exports = router;