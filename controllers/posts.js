const Post = require('../models/post');


module.exports = {
    create,
    index,
    new: newPost, 
    show
};

function create(req, res) {
    const post = new Post(req.body);
    // Assign the logged in user's id
    post.user = req.user._id;
    post.save(function(err) {
      if (err) return res.redirect('/posts/index');
      res.redirect(`/posts/index`);
    });
}

function index(req,res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { title: 'Song Streams', posts });
    });
}

function newPost(req, res) {
    res.render('posts/index', { title: 'New Post' });
}

function show(req, res) {
    Post.findById(req.params.id) 
        .exec(function (err, post) {
            res.render('posts/show', { title: 'Post Details', post });
        });
  }