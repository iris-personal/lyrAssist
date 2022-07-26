const Profile = require('../models/user');


module.exports = {
    show
};

function show(req,res) {
    Profile.find({}, function(err, user) {
        res.render('profiles/show', { title: 'Your Profile', user });
    });
}
