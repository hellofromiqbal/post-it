import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema({
  authorId: {
    type: String,
    required: true
  },
  authorFullname: {
    type: String,
    required: true
  },
  authorUsername: {
    type: String,
    required: true
  },
  textContent: {
    type: String,
    required: true
  }
}, { timestamps: true });

const postSchema = new Schema({
  authorId: {
    type: String,
    required: true
  },
  authorUsername: {
    type: String,
    required: true
  },
  authorFullname: {
    type: String,
    required: true
  },
  textContent: {
    type: String,
  },
  comments: {
    type: [commentSchema],
    default: []
  }
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;