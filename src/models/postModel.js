import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  text: {
    type: String,
  },
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;