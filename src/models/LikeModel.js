import mongoose, { Schema } from 'mongoose';

const likeSchema = new Schema({
  contentId: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
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
  }
}, { timestamps: true });

const Like = mongoose.models.Like || mongoose.model("Like", likeSchema);

export default Like;