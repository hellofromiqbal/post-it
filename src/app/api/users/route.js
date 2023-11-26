import connectMongoDB from "@/libs/mongodb"
import User from "@/models/userModel";
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const { fullname, email, password } = await request.json();
    
    // Check to see if the email already exist in database
    const isUserExist = await User.findOne({email});
    if(isUserExist) {
      return NextResponse.json({
        success: false,
        message: 'User with the email already exist',
      }, { status: 400 });
    };

    // Password hashing
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // New user creation process
    await User.create({
      fullname,
      email,
      password: hashedPassword
    });
    return NextResponse.json({
      success: true,
      message: "New user has been created."
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  };
};