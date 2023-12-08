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
      message: 'Comment has been sent.',
      data: newComment._doc
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error commenting.',
      error: error.message
    });
  };
};

// READ ALL COMMENTS
export const GET = async () => {
  try {
    await connectMongoDB();
    const comments = await Comment.find();
    return NextResponse.json({
      success: true,
      message: 'Successfully get comments.',
      data: comments
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error getting comments.'
    }, { status: 500 });
  };
};