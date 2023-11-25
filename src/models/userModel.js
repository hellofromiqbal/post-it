import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
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