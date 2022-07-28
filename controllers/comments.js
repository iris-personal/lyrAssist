const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
  create,
  delete: deleteComment,
  update
};

function create(req, res) {
  Post.findById(req.params.id, function(err, post) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    post.comments.push(req.body);
    post.save(function(err) {
      res.redirect(`/posts/${post._id}`);
    });
  });
}

function update(req, res) {
  Post.findOne(
    {'comments._id': req.params.id},
    function(err, post) {
      const commentSubdoc = post.comments.id(req.params.id);
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/posts/${post._id}`);
      commentSubdoc.content = req.body.content;
      post.save(function(err) {
        res.redirect(`/posts/${post._id}`);
      });  
    }
  );
}

async function deleteComment(req, res, next) {
  try{
    const post = await Post.findOne({'comments._id': req.params.id, 'comments.user': req.user._id});
    post.comments.remove(req.params.id);
    await post.save();
    res.redirect(`/posts/${post._id}`);
  } catch(err) {
    return next(err);
  } 
};
