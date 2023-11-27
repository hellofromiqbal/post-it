import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from 'next/server';
import Post from "@/models/postModel";

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