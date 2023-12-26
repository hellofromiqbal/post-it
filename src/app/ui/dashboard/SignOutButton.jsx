"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoLogOut } from "react-icons/io5";

const SignOutButton = ({ placement = 'navbar' }) => {
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
      className={`${placement === 'navbar' ? 'hidden p-4 hover:text-black hover:bg-green-500' : 'flex md:hidden'} md:flex items-center gap-4 text-light font-medium`}
      onClick={handleSignOut}
    >
      <IoLogOut size={placement === 'navbar' ? 25 : 30}/>
      <span className={`${placement !== 'navbar' && 'hidden'}`}>Sign Out</span>
    </button>
  )
};

export default SignOutButton;