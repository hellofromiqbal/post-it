import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const reqData = await request.json();

    // Check if user is exist
    const isUserExist = await User.findOne({ email: reqData.email });
    if(!isUserExist) {
      return NextResponse.json({
        success: false,
        message: "User does not exist."
      }, { status: 400 });
    };

    // Password validation
    const isPasswordMatch = await bcryptjs.compare(reqData.password, isUserExist.password);
    console.log(isPasswordMatch);
    if(!isPasswordMatch) {
      return NextResponse.json({
        success: false,
        message: "Invalid password."
      }, { status: 400 });
    };
    return NextResponse.json({
      success: true,
      message: "Password is valid."
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error log in.",
      error: error.message
    }, { status: 400 });
  };
};