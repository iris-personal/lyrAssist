var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, postsCtrl.index);
router.get('/:id', isLoggedIn, postsCtrl.show);
router.get('/:id/edit', postsCtrl.edit);
router.post('/', isLoggedIn, postsCtrl.create);
router.put('/:id', isLoggedIn, postsCtrl.update);

module.exports = router;