import connectMongoDB from "@/libs/mongodb"
import jwt from 'jsonwebtoken';
import Post from "@/models/postModel";
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const { textContent } = await request.json();

    // Decode user token
    const userToken = await request.cookies.get("pit");
    const userDetails = jwt.verify(userToken.value, process.env.SECRET_TOKEN)._doc;

    await Post.create({
      authorId: userDetails._id,
      authorUsername: userDetails.username,
      authorFullname: userDetails.fullname,
      textContent
    });
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