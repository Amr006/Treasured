
const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({
  content: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  image: {
    type: String,
    required: false,
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  likes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    reactionType: {
      type: String,
      enum: ['like', 'love', 'wow', 'haha', 'sad', 'angry'] // Add other reaction types as needed
    }
  }],
  // ... other post-related fields
});


const Post = mongoose.model('Post', postSchema);


module.exports = Post;