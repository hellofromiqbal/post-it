import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if(emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyEmailToken: hashedToken,
        verifyEmailTokenExpiryDate: Date.now() + 3600000
      }, { new: true, runValidators: true });
    } else if(emailType === 'RESETPASSWORD') {
      await User.findByIdAndUpdate(userId, {
        resetPasswordToken: hashedToken,
        resetPasswordTokenExpiryDate: Date.now() + 3600000
      }, { new: true, runValidators: true });
    };

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
      }
    });

    const mailOptions = {
      from: 'admin@postit.com',
      to: email,
      subject: emailType === 'VERIFY' ? 'Verify Your Email' : 'Reset Your Password',
      html: `<p>Click <a href="${process.env.DOMAIN}/verify-email?token=${hashedToken}">here to ${emailType === 'VERIFY' ? 'verify your email.' : 'reset your password.'}</a></p>`
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  };
};