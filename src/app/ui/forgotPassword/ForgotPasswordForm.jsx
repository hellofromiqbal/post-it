"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { forgotPasswordSchema } from '@/helpers/zodSchema';
import { notifySuccess } from '@/helpers/toaster';

const ForgotPasswordForm = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: {errors} } = useForm({ resolver: zodResolver(forgotPasswordSchema)});
  const submittedData = async (data) => {
    console.log(data);
    notifySuccess("Sending email. Please check your email regularly.");
    try {
      const res = await fetch("/api/sendMail/resetPassword", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      });
      if(!res.ok) {
        throw new Error("Failed to send forgot password email.");
      } else {
        reset();
        router.push("/");
      }
    } catch (error) {
      console.log(error.message);
    };
  };

  return (
    <form className='flex flex-col gap-8' onSubmit={handleSubmit(submittedData)}>
      <div className='flex flex-col gap-2'>
        <input
          type="email"
          placeholder='Email'
          className='px-4 py-2 border rounded-sm'
          {...register('email')}
        />
        <ul className='list-disc px-6'>
          {errors.email && <li className='text-white opacity-80'><small>{errors.email.message}</small></li>}
        </ul>
      </div>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition duration-150'>Send Email</button>
    </form>
  )
};

export default ForgotPasswordForm;