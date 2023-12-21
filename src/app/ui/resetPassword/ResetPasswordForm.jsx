"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { resetPasswordSchema } from '@/helpers/zodSchema';
import { notifySuccess } from '@/helpers/toaster';

const ResetPasswordForm = ({ token }) => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: {errors} } = useForm({ resolver: zodResolver(resetPasswordSchema)});
  const submittedData = async (data) => {
    console.log(data);
    notifySuccess("Sending email. Please check your email regularly.");
    try {
      const res = await fetch(`/api/users/reset-password/${token}`, {
        method: 'PUT',
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
          type="password"
          placeholder='New password'
          className='px-4 py-2 border rounded-sm'
          {...register('newPassword')}
        />
        <input
          type="password"
          placeholder='Confirm new password'
          className='px-4 py-2 border rounded-sm'
          {...register('confirmNewPassword')}
        />
        <ul className='list-disc px-6'>
          {errors.newPassword && <li className='text-white opacity-80'><small>{errors.newPassword.message}</small></li>}
          {errors.confirmNewPassword && <li className='text-white opacity-80'><small>{errors.confirmNewPassword.message}</small></li>}
        </ul>
      </div>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition duration-150'>Reset Password</button>
    </form>
  )
};

export default ResetPasswordForm;