import connectMongoDB from '@/libs/mongodb';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

// UPDATE USER FOLLOWING
export const PUT = async (request, {params}) => {
  try {
    await connectMongoDB();
    const { username, fullname, profilePictureUrl } = await request.json();
    const user = await User.findOneAndUpdate({username: params.username}, { $push: { following: { username, fullname, profilePictureUrl } } }, { new: true });
    return NextResponse.json({
      success: true,
      message: 'Followed.',
      data: user
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error following user.',
      error: error.message
    }, { status: 500 });
  };
};