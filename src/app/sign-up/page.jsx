import React from 'react';
import Link from 'next/link';
import SignUpForm from '../ui/signUp/SignUpForm';

const SignUpPage = () => {
  return (
    <main className="flex flex-col lg:flex-row h-screen">
      <div className='basis-1/2 lg:basis-1/2 flex justify-center items-center'>
        <div className='flex flex-col'>
          <h1 className='font-extrabold text-6xl md:text-8xl'>Post-It</h1>
          <p className='ps-1 font-medium text-sm md:text-base'>Post your thoughts freely.</p>
        </div>
      </div>
      <div className='basis-1/2 lg:basis-1/2 bg-slate-100 py-8 flex items-start lg:items-center overflow-auto'>
        <div className='flex flex-col px-8 md:px-0 gap-2 w-full md:w-2/3 mx-auto'>
          <SignUpForm/>
          <p>Already have an account? <Link href="/" className='text-blue-500'>Sign In</Link> now.</p>
        </div>
      </div>
    </main>
  )
};

export default SignUpPage;