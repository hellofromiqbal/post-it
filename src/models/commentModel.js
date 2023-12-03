import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema({
  postId: {
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
  },
  authorProfilePictureUrl: {
    type: String
  },
  textContent: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;