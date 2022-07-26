const Profile = require('../models/user');


module.exports = {
    show
};

function show(req,res) {
    res.render(`${user._id}/profile`);
}