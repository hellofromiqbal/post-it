import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userModel";
import { NextResponse } from 'next/server';

export const PUT = async (request, {params}) => {
  try {
    await connectMongoDB();
    const { updatedFullname, updatedBio, updatedLocation, updatedWebsite } = await request.json();
    const user = await User.findOneAndUpdate({username: params.username}, {
      fullname: updatedFullname,
      bio: updatedBio,
      location: updatedLocation,
      website: updatedWebsite
    }, { new: true });
    return NextResponse.json({
      success: true,
      message: 'Hello',
      data: user
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};

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