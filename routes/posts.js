var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, postsCtrl.index);
router.post('/', isLoggedIn, postsCtrl.create);
router.get('/:id', isLoggedIn, postsCtrl.show);

module.exports = router;