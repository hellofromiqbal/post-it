import connectMongoDB from "@/libs/mongodb"
import Like from "@/models/LikeModel";
import { NextResponse } from 'next/server';

// CREATE NEW LIKE
export const POST = async (request) => {
  try {
    await connectMongoDB();
    const reqData = await request.json();
    const newLike = await Like.create(reqData);
    return NextResponse.json({
      success: true,
      message: 'Successfully created new like.',
      data: newLike
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};

// GET ALL LIKES
export const GET = async () => {
  try {
    await connectMongoDB();
    const likes = await Like.find();
    return NextResponse.json({
      success: true,
      message: 'Successfully fetched likes.',
      data: likes
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: true,
      error: error.message
    }, { status: 400 });
  };
};
