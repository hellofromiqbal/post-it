import connectMongoDB from '@/libs/mongodb';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

// FOLLOWING A USER
export const PUT = async (request, {params}) => {
  try {
    await connectMongoDB();
    const { username, fullname, profilePictureUrl } = await request.json();
    const followingUser = await User.findOneAndUpdate({username: params.username}, { $push: { following: { username, fullname, profilePictureUrl } } }, { new: true });
    const followedUser = await User.findOneAndUpdate({username}, { $push: { followers: { username: followingUser.username, fullname: followingUser.fullname, profilePictureUrl: followingUser.profilePictureUrl } } }, { new: true });
    const result = { followingUser, followedUser };
    return NextResponse.json({
      success: true,
      message: 'Followed.',
      data: result
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error following user.',
      error: error.message
    }, { status: 500 });
  };
};