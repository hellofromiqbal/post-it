"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { signUpFormSchema } from '@/helpers/zodSchema';
import { notifyFailed, notifySuccess } from '@/helpers/toaster';

const SignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: {errors} } = useForm({ resolver: zodResolver(signUpFormSchema)});
  const submittedData = async (data) => {
    try {
      const res = await fetch("/api/users/sign-up", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      });
      if(!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
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
    <form className='flex flex-col gap-8' onSubmit={handleSubmit(submittedData)}>
      <div className='flex flex-col gap-2'>
        <input
          type="text"
          placeholder='Fullname'
          className='px-4 py-2 border rounded-sm'
          {...register('fullname')}
        />
        <input
          type="email"
          placeholder='Email'
          className='px-4 py-2 border rounded-sm'
          {...register('email')}
        />
        <input
          type="password"
          placeholder='Password'
          className='px-4 py-2 border rounded-sm'
          {...register('password')}
        />
        <input
          type="password"
          placeholder='Confirm password'
          className='px-4 py-2 border rounded-sm'
          {...register('confirmPassword')}
        />
        <ul className='list-disc px-6'>
          {errors.fullname && <li className='text-white opacity-80'><small>{errors.fullname.message}</small></li>}
          {errors.email && <li className='text-white opacity-80'><small>{errors.email.message}</small></li>}
          {errors.password && <li className='text-white opacity-80'><small>{errors.password.message}</small></li>}
          {errors.confirmPassword && <li className='text-white opacity-80'><small>{errors.confirmPassword.message}</small></li>}
        </ul>
      </div>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition duration-150'>Sign Up</button>
    </form>
  )
};

export default SignUpForm;