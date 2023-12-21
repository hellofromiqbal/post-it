"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ResetPasswordForm from '../ui/resetPassword/ResetPasswordForm';

const ResetPassword = () => {
  const [token, setToken] = useState('');

  const verifyToken = async (token) => {
    try {
      const res = await fetch(`api/users/reset-password/${token}`);
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    const urlToken = window.location.search.split('=')[1];
    setToken(urlToken);
  }, []);

  return (
    <main className="flex flex-col lg:flex-row h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className='basis-1/2 md:basis-1/2 flex justify-center items-center'>
        <div className='flex flex-col text-white'>
        <h1 className='font-extrabold text-6xl md:text-8xl'>Post<span className='text-green-500'>It</span></h1>
          <p className='ps-1 font-medium text-sm md:text-base opacity-70'>Post your thoughts freely.</p>
        </div>
      </div>
      <div className='basis-1/2 md:basis-1/2 py-8 flex items-start lg:items-center h-max md:h-full'>
        <div className='flex flex-col px-8 md:px-0 gap-4 w-full md:w-2/3 mx-auto'>
          <ResetPasswordForm token={token}/>
          <p className='text-white text-sm text-center opacity-70'>Already have an account? <Link href="/" className='text-white hover:text-green-400 underline'>Sign In</Link> now.</p>
        </div>
      </div>
    </main>
  )
};

export default ResetPassword;