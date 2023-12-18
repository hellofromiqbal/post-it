import { sendEmail } from "@/helpers/mailer";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userModel";
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const { email } = await request.json();
    const user = await User.findOne({email});
    if(!user) {
      return NextResponse.json({
        success: false,
        message: "Failed sending forgot password token."
      }, { status: 400 });
    }
    await sendEmail({ email: user.email, emailType: "RESETPASSWORD", userId: user._id });
    return NextResponse.json({
      success: true,
      message: "Forgot password email has been sent."
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error sending forgot password email token.",
      error: error.message
    }, { status: 500 });
  }
};