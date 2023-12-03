import connectMongoDB from "@/libs/mongodb"
import Like from "@/models/LikeModel";
import { NextResponse } from 'next/server';

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
