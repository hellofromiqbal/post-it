import connectMongoDB from "@/libs/mongodb"
import Post from "@/models/postModel";
import { NextResponse } from 'next/server';

// CREATE NEW POST
export const POST = async (request) => {
  try {
    await connectMongoDB();
    const reqData = await request.json();
    const newPost = await Post.create(reqData);
    return NextResponse.json({
      success: true,
      message: 'Post created.',
      data: newPost._doc
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error creating a post.',
      error: error.message
    }, { status: 500 });
  };
};

// READ ALL POSTS
export const GET = async () => {
  try {
    await connectMongoDB();
    const posts = await Post.find();
    return NextResponse.json({
      success: true,
      message: 'Successfully get posts.',
      data: posts.reverse()
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error getting posts.'
    }, { status: 500 });
  };
};