import connectMongoDB from "@/libs/mongodb"
import Like from "@/models/LikeModel";
import Comment from "@/models/commentModel";
import Post from "@/models/postModel";
import { NextResponse } from 'next/server';

// DELETE COMMENT
export const DELETE = async (request, {params}) => {
  try {
    await connectMongoDB();
    await Like.deleteMany({contentId: params.id});
    await Comment.deleteMany({postId: params.id});
    await Comment.findByIdAndDelete(params.id);
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