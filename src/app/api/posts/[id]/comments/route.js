import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/postModel";
import { NextResponse } from 'next/server';

export const POST = async (request, {params}) => {
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