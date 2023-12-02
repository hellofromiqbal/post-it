import connectMongoDB from "@/libs/mongodb"
import Comment from "@/models/commentModel";
import { NextResponse } from 'next/server';

// CREATE NEW POST
export const POST = async (request) => {
  try {
    await connectMongoDB();
    const reqData = await request.json();
    const newComment = await Comment.create(reqData);
    return NextResponse.json({
      success: true,
      message: 'Comment has been posted.',
      data: newComment._doc
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error posting the comment.',
      error: error.message
    });
  };
};