"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { changePasswordSchema } from '@/helpers/zodSchema';
import { notifySuccess } from '@/helpers/toaster';

const ChangePasswordForm = ({ username }) => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: {errors} } = useForm({ resolver: zodResolver(changePasswordSchema)});
  const submittedData = async (data) => {
    console.log(data);
    try {
      const res = await fetch('/api/users/change-password/', {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          username: username.replace('%40', '@'),
          ...data
        })
      });
      if(!res.ok) {
        throw new Error("Failed to change password.");
      } else {
        const result = await res.json();
        notifySuccess(result.message);
        reset();
        router.push("/dashboard");
      }
    } catch (error) {
      notifySuccess(error.message);
    };
  };

  return (
    <form
      className='flex flex-col gap-4 px-4 pb-4'
      onSubmit={handleSubmit(submittedData)}
    >
      <div className='flex flex-col gap-1'>
        <label htmlFor="oldPassword" className='font-medium'>Old password</label>
        <input
          id='oldPassword'
          type='password'
          className='px-4 py-2 bg-transparent border border-light rounded-md text-white'
          {...register("oldPassword")}
        ></input>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="newPassword" className='font-medium'>New password</label>
        <input
          id='newPassword'
          type='password'
          className='px-4 py-2 bg-transparent border border-light rounded-md text-white'
          {...register("newPassword")}
        ></input>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="confirmNewPassword" className='font-medium'>Confirm new password</label>
        <input
          id='confirmNewPassword'
          type='password'
          className='px-4 py-2 bg-transparent border border-light rounded-md text-white'
          {...register("confirmNewPassword")}
        ></input>
      </div>
      <ul className='list-disc px-6'>
        {errors.oldPassword && <li className='text-white opacity-80'><small>{errors.oldPassword.message}</small></li>}
        {errors.newPassword && <li className='text-white opacity-80'><small>{errors.newPassword.message}</small></li>}
        {errors.confirmNewPassword && <li className='text-white opacity-80'><small>{errors.confirmNewPassword.message}</small></li>}
      </ul>
      <div className='flex flex-col gap-4'>
        <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-150'>Change Password</button>
      </div>
    </form>
  )
};

export default ChangePasswordForm;