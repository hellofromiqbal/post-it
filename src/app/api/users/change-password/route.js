import connectMongoDB from "@/libs/mongodb"
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const PUT = async (request) => {
  try {
    await connectMongoDB();
    const { username, oldPassword, newPassword } = await request.json();
    const isUserExist = await User.findOne({username});
    if(!isUserExist) {
      return NextResponse.json({
        success: false,
        message: 'Invalid username'
      }, { status: 400 });
    };

    // Old password checking
    const isOldPasswordCorrect = await bcryptjs.compare(oldPassword, isUserExist.password);
    if(!isOldPasswordCorrect) {
      return NextResponse.json({
        success: false,
        message: "Invalid password."
      }, { status: 400 });
    };

    // Hash new password
    const salt = await bcryptjs.genSalt(10);
    const hashedNewPassword = await bcryptjs.hash(newPassword, salt);

    // Update user password
    isUserExist.password = hashedNewPassword;
    await isUserExist.save();

    // JWT Login Token Generation
    const tokenPayload = { ...isUserExist };
    const token = jwt.sign(tokenPayload, process.env.SECRET_TOKEN, {expiresIn: '1d'});
    
    const response = NextResponse.json({
      success: true,
      message: "Password has been changed.",
      data: isUserExist
    }, { status: 200 });
    
    // Update JWT
    response.cookies.set("pit", token, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error changing password.",
      error: error.message
    }, { status: 400 });
  };
};