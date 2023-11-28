"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const router = useRouter();

  const signUpFormSchema = z.object({
    fullname: z.string({
      required_error: "Fullname is required.",
      invalid_type_error: "Fullname must be a string."
    }).min(2, {message: "Fullname must be at least 2 or more characters long."}).max(30, {message: "Fullname must be 30 or fewer characters long."}),
    email: z.string().email({message: "Email is required and must be in a correct format."}),
    password: z.string({
      required_error: "Password is required"
    }).min(6, {message: "Password at least 6 or more characters long."}).max(20, {message: "Password at least 20 or fewer characters long."}),
    confirmPassword: z.string().min(6, {message: "Confirm password at least 6 or more characters long."}).max(20, {message: "Confirm password at least 20 or fewer characters long."}),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"]
  });

  const { register, handleSubmit, formState: {errors} } = useForm({ resolver: zodResolver(signUpFormSchema)});

  const submittedData = async (data) => {
    try {
      const res = await fetch("/api/users/sign-up", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      });
      if(!res.ok) {
        throw new Error("Failed to create new user.");
      } else {
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