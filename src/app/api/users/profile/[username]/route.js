import connectMongoDB from "@/libs/mongodb";
import Like from "@/models/LikeModel";
import Comment from "@/models/commentModel";
import Post from "@/models/postModel";
import User from "@/models/userModel";
import { NextResponse } from 'next/server';

// UPDATE USER PROFILE
export const PUT = async (request, {params}) => {
  try {
    await connectMongoDB();
    const { updatedFullname, updatedBio, updatedLocation, updatedWebsite } = await request.json();
    const comments = await Comment.findOneAndUpdate({authorUsername: params.username}, {
      authorFullname: updatedFullname
    }, { new: true });
    const likes = await Like.findOneAndUpdate({authorUsername: params.username}, {
      authorFullname: updatedFullname
    }, { new: true });
    const posts = await Post.findOneAndUpdate({authorUsername: params.username}, {
      authorFullname: updatedFullname
    }, { new: true });
    const user = await User.findOneAndUpdate({username: params.username}, {
      fullname: updatedFullname,
      bio: updatedBio,
      location: updatedLocation,
      website: updatedWebsite
    }, { new: true });
    return NextResponse.json({
      success: true,
      message: 'Hello',
      data: { user, posts, likes, comments }
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};

export const GET = async (request, {params}) => {
  try {
    await connectMongoDB();
    const userDetails = await User.findOne({username: params.username});
    return NextResponse.json({
      success: true,
      message: 'User detail fetched.',
      data: userDetails
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: true,
      error: error.message
    }, { status: 400 });
  };
};