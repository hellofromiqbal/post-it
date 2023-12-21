import connectMongoDB from "@/libs/mongodb"
import User from "@/models/userModel";
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

export const PUT = async (request, {params}) => {
  try {
    await connectMongoDB();
    const { newPassword, confirmNewPassword } = await request.json();
    const urlToken = await params.token;
    const isUserExist = await User.findOne({
      resetPasswordToken: urlToken,
      resetPasswordTokenExpiryDate: {$gt: Date.now()}
    });
    
    if(!isUserExist) {
      return NextResponse.json({
        success: false,
        message: 'Invalid token.'
      }, { status: 400 });
    };

    const salt = await bcryptjs.genSalt(10);
    const hashedNewPassword = await bcryptjs.hash(newPassword, salt);

    isUserExist.password = hashedNewPassword;
    isUserExist.resetPasswordToken = undefined;
    isUserExist.resetPasswordTokenExpiryDate = undefined;
    await isUserExist.save();
    return NextResponse.json({
      success: true,
      message: "Password reset succeed.",
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error resetting password."
    }, { status: 500 });
  };
};