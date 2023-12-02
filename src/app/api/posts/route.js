import connectMongoDB from "@/libs/mongodb"
import jwt from 'jsonwebtoken';
import Post from "@/models/postModel";
import { NextResponse } from 'next/server';

// CREATE NEW POST
export const POST = async (request) => {
  try {
    await connectMongoDB();
    const reqData = await request.json();

    // Decode user token
    // const userToken = await request.cookies.get("pit");
    // const userDetails = jwt.verify(userToken.value, process.env.SECRET_TOKEN)._doc;

    const newPost = await Post.create(reqData);
    
    return NextResponse.json({
      success: true,
      message: 'Post has been posted.',
      data: newPost._doc
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error posting the post.',
      error: error.message
    });
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
      data: posts
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error getting posts.'
    }, { status: 500 });
  };
};