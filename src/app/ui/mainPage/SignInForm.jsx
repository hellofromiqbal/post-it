import React from 'react';

const SignInForm = () => {
  return (
    <form className='flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <input
          type="email"
          placeholder='Email'
          className='px-4 py-2'
        />
        <input
          type="password"
          placeholder='Password'
          className='px-4 py-2'
        />
      </div>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium transition duration-150'>Sign In</button>
    </form>
  )
};

export default SignInForm;