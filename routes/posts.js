var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, postsCtrl.index);
router.post('/:id', isLoggedIn, postsCtrl.create);

module.exports = router;