import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const reqData = await request.json();

    // Existing User Checking By Email
    const isUserExist = await User.findOne({ email: reqData.email });
    if(!isUserExist) {
      return NextResponse.json({
        success: false,
        message: "User does not exist."
      }, { status: 400 });
    };

    // Password Validation
    const isPasswordMatch = await bcryptjs.compare(reqData.password, isUserExist.password);
    if(!isPasswordMatch) {
      return NextResponse.json({
        success: false,
        message: "Invalid password."
      }, { status: 400 });
    };

    // JWT Login Token Generation
    const tokenPayload = { ...isUserExist };
    const token = jwt.sign(tokenPayload, process.env.SECRET_TOKEN, {expiresIn: '1d'});
    
    const response = NextResponse.json({
      success: true,
      message: "Successfully signed in."
    }, { status: 200 });
    
    response.cookies.set("pit", token, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error log in.",
      error: error.message
    }, { status: 400 });
  };
};