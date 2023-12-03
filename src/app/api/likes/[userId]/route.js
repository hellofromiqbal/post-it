import connectMongoDB from "@/libs/mongodb"
import Like from "@/models/LikeModel";
import { NextResponse } from 'next/server';

// DELETE LIKE
export const DELETE = async (request, {params}) => {
  try {
    await connectMongoDB();
    await Like.findOneAndDelete({authorId: params.userId});
    return NextResponse.json({
      success: true,
      message: 'Like has been deleted.'
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};