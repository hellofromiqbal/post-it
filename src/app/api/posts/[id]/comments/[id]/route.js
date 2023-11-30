import connectMongoDB from "@/libs/mongodb"
import Post from "@/models/postModel";
import { NextResponse } from 'next/server';

// DELETE COMMENT
export const DELETE = async (request, {params}) => {
  try {
    await connectMongoDB();
    await Post.findByIdAndDelete(params.id);
    return NextResponse.json({
      success: true,
      message: 'Comment has been deleted.'
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};