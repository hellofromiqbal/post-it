import connectMongoDB from '@/libs/mongodb';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

// UNFOLLOWING A USER
export const PUT = async (request, {params}) => {
  try {
    await connectMongoDB();
    const { username } = await request.json();
    const user = await User.findOneAndUpdate({username: params.username}, { $pull: { following: { username: username } } }, { new: true });
    return NextResponse.json({
      success: true,
      message: 'Unfollowed.',
      data: user
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error unfollowing user.',
      error: error.message
    }, { status: 500 });
  };
};