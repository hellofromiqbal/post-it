import { sendEmail } from "@/helpers/mailer";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userModel";
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const { id } = await request.json();
    const user = await User.findById(id);
    if(!user) {
      return NextResponse.json({
        success: false,
        message: "Failed sending verify email token."
      }, { status: 400 });
    }
    await sendEmail({ email: user.email, emailType: "VERIFY", userId: user._id });
    return NextResponse.json({
      success: true,
      message: "Verify email has been sent."
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error sending verify email token.",
      error: error.message
    }, { status: 500 });
  }
};