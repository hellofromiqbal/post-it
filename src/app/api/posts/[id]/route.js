import connectMongoDB from "@/libs/mongodb"
import Post from "@/models/postModel";
import { NextResponse } from 'next/server';

// UPDATE POST (PUSH NEW COMMENT)
export const PUT = async (request, {params}) => {
  try {
    await connectMongoDB();
    const reqData = await request.json();
    await Post.findByIdAndUpdate(params.id, {$push: {"comments": reqData}});
    return NextResponse.json({
      success: true,
      message: 'Successfully commenting the post.',
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};

// DELETE POST
export const DELETE = async (request, {params}) => {
  try {
    await connectMongoDB();
    await Post.findByIdAndDelete(params.id);
    return NextResponse.json({
      success: true,
      message: 'Post has been deleted.'
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};

// READ SINGLE POST
export const GET = async (request, {params}) => {
  try {
    await connectMongoDB();
    const post = await Post.findById(params.id);
    return NextResponse.json({
      success: true,
      message: 'Post fetched.',
      data: post
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};