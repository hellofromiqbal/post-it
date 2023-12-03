import mongoose, { Schema } from 'mongoose';

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
  authorProfilePictureUrl: {
    type: String,
  },
  textContent: {
    type: String,
  }
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;