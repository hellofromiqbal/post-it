import connectMongoDB from '@/libs/mongodb';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const reqBody = await request.json();
    const { token } = reqBody;

    const isUserExist = await User.findOne({
      verifyEmailToken: token,
      verifyEmailTokenExpiryDate: {$gt: Date.now()}
    });

    if(!isUserExist) {
      return NextResponse.json({
        error: "Invalid token"
      }, { status: 400 });
    };

    isUserExist.isVerified = true;
    isUserExist.verifyEmailToken = undefined;
    isUserExist.verifyEmailTokenExpiryDate = undefined;
    const updatedUser = await isUserExist.save();

    return NextResponse.json({
      success: true,
      message: "Email verified"
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      error: error.message
    }, { status: 500 });
  }
};