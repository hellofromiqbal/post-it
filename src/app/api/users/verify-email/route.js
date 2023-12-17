import connectMongoDB from '@/libs/mongodb';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    const isUserExist = await User.findOne({
      verifyEmailToken: token,
      verifyEmailTokenExpiryDate: {$gt: Date.now()}
    });

    if(!isUserExist) {
      return NextResponse.json({
        error: "Invalid token"
      }, { status: 400 });
    };

    console.log(isUserExist);

    isUserExist.isVerify = true;
    isUserExist.verifyEmailToken = undefined;
    isUserExist.verifyEmailTokenExpiryDate = undefined;
    const updatedUser = await isUserExist.save();
    console.log(updatedUser);

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