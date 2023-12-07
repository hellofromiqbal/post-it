"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import { IoLogOut } from "react-icons/io5";

const SignOutButton = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/users/sign-out", { cache: 'no-store' });
      if(!res.ok) {
        throw new Error("Failed to sign out.");
      } else {
        router.push("/");
      };
    } catch (error) {
      console.log(error.message);
    };
  };

  return (
    <button
      className='text-light hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4'
      onClick={handleSignOut}
    >
      <IoLogOut size={25}/>
      <span>Sign Out</span>
    </button>
  )
};

export default SignOutButton;