import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userModel";
import { NextResponse } from 'next/server';

export const GET = async (request, {params}) => {
  try {
    await connectMongoDB();
    const userDetails = await User.findOne({username: params.username});
    return NextResponse.json({
      success: true,
      message: 'User detail fetched.',
      data: userDetails
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: true,
      error: error.message
    }, { status: 400 });
  };
};