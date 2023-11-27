import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  text: {
    type: String,
  },
  userId: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;