import connectMongoDB from "@/libs/mongodb";
import Like from "@/models/LikeModel";
import Comment from "@/models/commentModel";
import Post from "@/models/postModel";
import User from "@/models/userModel";
import { NextResponse } from 'next/server';

export const DELETE = async (request, {params}) => {
  try {
    await connectMongoDB();
    await User.findByIdAndDelete(params.slug);
    await Post.deleteMany({authorId: params.slug});
    await Comment.deleteMany({authorId: params.slug});
    await Comment.deleteMany({postAuthorId: params.slug});
    await Like.deleteMany({authorId: params.slug});
    await Like.deleteMany({contentAuthorId: params.slug});
    return NextResponse.json({
      success: true,
      message: 'Account has been deleted.'
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error deleting account.'
    }, { status: 400 });
  }
};