"use client"

import { notifySuccess } from "@/helpers/toaster";
import { useRouter } from "next/navigation";
import { useState } from "react";

const VerifyEmailButton = ({user}) => {
  const [sending, setIsSending] = useState(false);
  const router = useRouter();
  const handleVerify = async (e) => {
    e.preventDefault();
    setIsSending(true);
    notifySuccess("Sending email. Please check your email regularly.");
    try {
      const res = await fetch(`/api/sendMail/verifyEmail`, {
        cache: 'no-store',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id: user._id })
      });
      if(!res.ok) {
        throw new Error("Failed to send email.");
      } else {
        setIsSending(false);
        await fetch("/api/users/sign-out", { cache: 'no-store' });
        router.push('/');
      };
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      className={`px-4 py-2 ${user?.isVerified || sending ? 'bg-blue-300 hover:bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-semibold rounded-full transition duration-150`}
      onClick={(e) => handleVerify(e)}
      disabled={sending || user?.isVerified}
    >{user?.isVerified ? 'Email Verified' : sending ? 'Sending...' : 'Verify Email'}</button>
  )
};

export default VerifyEmailButton;