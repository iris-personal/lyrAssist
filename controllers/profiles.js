const User = require('../models/user');


module.exports = {
    show
};

function show(req,res) {
    User.find({}, function(err, user) {
        res.render('profiles/show', { title: 'Your Profile', user });
    });
}
