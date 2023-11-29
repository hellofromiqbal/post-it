import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export const GET = async (request) => {
  try {
    const userToken = await request.cookies.get("pit");
    const userDetails = jwt.verify(userToken.value, process.env.SECRET_TOKEN)._doc;
    return NextResponse.json({
      success: true,
      message: "Successfully get user details.",
      data: userDetails
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};