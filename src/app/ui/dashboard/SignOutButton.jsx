"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoLogOut } from "react-icons/io5";
import { notifyFailed, notifySuccess } from '@/helpers/toaster';

const SignOutButton = ({ placement = 'navbar' }) => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/users/sign-out", { cache: 'no-store' });
      if(!res.ok) {
        const result = await res.json();
        throw new Error(result.error);
      } else {
        const result = await res.json();
        notifySuccess(result.message);
        router.push("/");
      };
    } catch (error) {
      notifyFailed(error.message);
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