const Post = require('../models/post');
const User = require('../models/user');


module.exports = {
    create,
    index,
    new: newPost, 
    show,
    edit,
    update,
    delete: deletePost
};

function create(req, res) {
    const post = new Post(req.body);
    // Assign the logged in user's id
    post.user = req.user._id;
    post.save(function(err) {
      if (err) return res.redirect('/posts');
      res.redirect(`/posts`);
    });
}

function index(req,res) {
    Post.find({})
        .populate('user')
        .exec(function(err, posts) {
            posts.sort((a,b) => (b.createdAt) - (a.createdAt));
            res.render('posts/index', { title: 'Song Streams', posts });
    });
}

function newPost(req, res) {
    res.render('posts/index', { title: 'New Post' });
}

function show(req, res) {
    Post.findById(req.params.id)
        .populate('user') 
        .exec(function (err, post) {
            console.log(post);
            res.render('posts/show', { title: 'Post Details', post });
        });
}

function edit(req, res) {
    Post.findById(req.params.id)
    .populate('user') 
    .exec(function(err, post) {
      if (err || !post) return res.redirect('/posts');
      res.render('posts/edit', {title: 'Edit Post', post});
    });
}

function update(req, res) {
    Post.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id},
        req.body,
        {new: true},
        function(err, post) {
          if (err || !post) return res.redirect('/posts');
          res.redirect(`/posts/${post._id}`);
        }
      );
}

function deletePost(req, res) {
    Post.findOneAndDelete(
      {_id: req.params.id, userRecommending: req.user._id}, function(err) {
        res.redirect('/posts');
      }
    );
  }