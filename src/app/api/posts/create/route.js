import connectMongoDB from "@/libs/mongodb"
import jwt from 'jsonwebtoken';
import Post from "@/models/postModel";
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const { text } = await request.json();

    // Decode user token
    const userToken = await request.cookies.get("pit");
    const userDetails = jwt.verify(userToken.value, process.env.SECRET_TOKEN)._doc;

    await Post.create({text, userId: userDetails._id});
    return NextResponse.json({
      success: true,
      message: 'Post has been posted.'
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error posting the post.',
      error: error.message
    });
  };
};