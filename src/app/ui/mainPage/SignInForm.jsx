"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignInForm = () => {
  const router = useRouter();

  const [errors, setErrors] = useState();

  const { register, handleSubmit, watch } = useForm();

  const submittedData = async (data) => {
    try {
      const res = await fetch("/api/users/sign-in", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      });
      if(!res.ok) {
        throw new Error("Invalid email or password.");
      } else {
        router.push("/dashboard");
      };
    } catch (error) {
      setErrors(error.message);
    };
  };

  return (
    <form className='flex flex-col gap-8' onSubmit={handleSubmit(submittedData)}>
      <div className='flex flex-col gap-2'>
        <input
          type="email"
          placeholder='Email'
          className='px-4 py-2 rounded-sm'
          {...register("email")}
        />
        <input
          type="password"
          placeholder='Password'
          className='px-4 py-2 rounded-sm'
          {...register("password")}
        />
        <ul className='list-disc px-6'>
          {errors && <li className='text-white opacity-80'><small>{errors}</small></li>}
        </ul>
      </div>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition duration-150'>Sign In</button>
    </form>
  )
};

export default SignInForm;