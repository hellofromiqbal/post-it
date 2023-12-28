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

    let { updatedUsername, updatedFullname, updatedBio, updatedLocation, updatedWebsite } = await request.json();

    updatedUsername = `@${updatedUsername}`;

    // Check if updated username already taken
    const isUsernameAlreadyTaken = await User.findOne({username: updatedUsername});
    if(isUsernameAlreadyTaken) {
      return NextResponse.json({
        success: false,
        message: "Username already taken."
      }, { status: 400 });
    };

    // Update user with matches username
    const user = await User.findOneAndUpdate({username: params.username}, {
      username: updatedUsername,
      fullname: updatedFullname,
      bio: updatedBio,
      location: updatedLocation,
      website: updatedWebsite
    }, { new: true });

    // Update comments with matches username
    await Comment.updateMany({authorUsername: params.username}, {
      authorUsername: updatedUsername,
      authorFullname: updatedFullname
    }, { new: true });
    const comments = await Comment.find({authorUsername: params.username});

    // Update likes with matches username
    await Like.updateMany({authorUsername: params.username}, {
      authorUsername: updatedUsername,
      authorFullname: updatedFullname
    }, { new: true });
    const likes = await Like.find({authorUsername: params.username});

    // Update posts with matches username
    await Post.updateMany({authorUsername: params.username}, {
      authorUsername: updatedUsername,
      authorFullname: updatedFullname
    }, { new: true });
    const posts = await Post.find({authorUsername: params.username});

    return NextResponse.json({
      success: true,
      message: 'Profile updated.',
      data: { user, posts, likes, comments }
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error editing profile.',
      error: error.message
    }, { status: 400 });
  };
};

export const GET = async (request, {params}) => {
  try {
    await connectMongoDB();
    const userDetails = await User.findOne({username: params.username});
    if(!userDetails) {
      return NextResponse.json({
        success: false,
        message: 'Error fetching user details.',
      }, { status: 400 });
    };
    return NextResponse.json({
      success: true,
      message: 'User detail fetched.',
      data: userDetails
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: true,
      error: error.message
    }, { status: 500 });
  };
};