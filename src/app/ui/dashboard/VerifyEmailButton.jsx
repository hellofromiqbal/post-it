"use client"

import { notifySuccess } from "@/helpers/toaster";
import { useRouter } from "next/navigation";

const VerifyEmailButton = ({id}) => {
  const router = useRouter();
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/sendMail/verifyEmail`, {
        cache: 'no-store',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if(!res.ok) {
        throw new Error("Failed to send email.");
      } else {
        const result = await res.json();
        notifySuccess(result.message);
      };
    } catch (error) {
      console.log(error.message);
    };
  };

  return (
    <button
      className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition duration-150'
      onClick={(e) => handleVerify(e)}
    >Verify Email</button>
  )
};

export default VerifyEmailButton;