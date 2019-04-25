const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  body: String,
  author: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

const Post = mongoose.model('posts', postSchema);
module.exports = Post;