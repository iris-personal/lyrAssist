const Post = require('../models/post');


module.exports = {
    create,
    index,
    new: newPost
};

function create(req, res) {
    const post = new Post(req.body);
    // Assign the logged in user's id
    post.user = req.user._id;
    post.save(function(err) {
      if (err) return res.redirect('/posts');
      res.redirect(`/posts/${post._id}`);
    });
}

function index(req,res) {
    Post.find({}, function(err, posts) {
        res.render('song-stream/posts', { title: 'Song Streams', posts });
    });
}

function newPost(req, res) {
    res.render('song-stream/posts', { title: 'New Post' });
}