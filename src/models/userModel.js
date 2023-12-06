import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: 'Somewhere'
  },
  website: {
    type: String,
    default: ''
  },
  profilePictureUrl: {
    type: String,
    default: ""
  },
  bgProfilePictureUrl: {
    type: String,
    default: ""
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verifyEmailToken: String,
  verifyEmailTokenExpiryDate: Date,
  resetPasswordToken: String,
  resetPasswordTokenExpiryDate: Date,
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;