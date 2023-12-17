"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const VerifyEmailPage = () => {
  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyEmail = async () => {
    try {
      const res = await fetch("/api/users/verify-email", {
        cache: 'no-store',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({token}),
      });
      if(res.ok) {
        setVerified(true);
      } else {
        throw new Error("Failed to verify email.");
      };
    } catch (error) {
      setError(true);
      console.log(error.message);
    };
  }

  useEffect(() => {
    const urlToken = window.location.search.split('=')[1];
    setToken(urlToken);
  }, []);

  useEffect(() => {
    if(token.length > 0) {
      verifyEmail();
    };
  }, [token]);

  return (
    <main className="flex flex-col lg:flex-row h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className='basis-1/2 md:basis-1/2 flex justify-center items-center'>
        <div className='flex flex-col text-white'>
        <h1 className='font-extrabold text-6xl md:text-8xl'>Post<span className='text-green-500'>It</span></h1>
          <p className='ps-1 font-medium text-sm md:text-base opacity-70'>Post your thoughts freely.</p>
        </div>
      </div>
      <div className='basis-1/2 md:basis-1/2 py-8 flex items-start lg:items-center h-max md:h-full'>
        {verified &&
          <div className='flex flex-col px-8 md:px-0 gap-4 w-full md:w-2/3 mx-auto'>
            <h3>Email Verified!</h3>
            <p className='text-white text-sm text-center opacity-70'>Click <Link href="/" className='text-white hover:text-green-400 underline'>here</Link> to sign in.</p>
          </div>
        }
        {error &&
          <div className='flex flex-col px-8 md:px-0 gap-4 w-full md:w-2/3 mx-auto'>
            <h3>Error!</h3>
            <p className='text-white text-sm text-center opacity-70'>Click <Link href="/" className='text-white hover:text-green-400 underline'>here</Link> to sign in.</p>
          </div>
        }
      </div>
    </main>
  )
};

export default VerifyEmailPage;