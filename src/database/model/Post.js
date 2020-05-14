const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Number,
    author: String,
    idAuthor: String,
    content: String,
    thumbPath: String,
    category: String,
    archived: Boolean
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;