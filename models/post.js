const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    name: String,
    avatar: String
}, {
    timestamps: true
});

const postSchema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);