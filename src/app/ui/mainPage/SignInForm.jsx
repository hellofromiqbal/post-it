"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
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
          className='px-4 py-2'
          {...register("email")}
        />
        <input
          type="password"
          placeholder='Password'
          className='px-4 py-2'
          {...register("password")}
        />
        <div className='bg-red-200'>
          <ul className='list-disc px-6'>
            {errors && <li><small>{errors}</small></li>}
          </ul>
        </div>
      </div>
      <button className={`px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium transition duration-150`}>Sign In</button>
    </form>
  )
};

export default SignInForm;