import React from 'react';

const SignUpForm = () => {
  return (
    <form className='flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <input
          type="text"
          placeholder='Fullname'
          className='px-4 py-2'
        />
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
        <input
          type="password"
          placeholder='Confirm password'
          className='px-4 py-2'
        />
      </div>
      <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium transition duration-150'>Sign In</button>
    </form>
  )
};

export default SignUpForm;