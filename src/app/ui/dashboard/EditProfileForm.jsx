"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { updatedCurrentUserDetails } from '@/store/currentUserSlicer';
import { updatePost } from '@/store/currentPostsSlicer';
import { updateLike } from '@/store/currentLikesSlicer';
import { updateComment } from '@/store/currentCommentsSlicer';
import { zodResolver } from '@hookform/resolvers/zod';
import { notifySuccess } from '@/helpers/toaster';
import { editProfileFormSchema } from '@/helpers/zodSchema';
import DeleteAccountButton from './DeleteAccountButton';
import VerifyEmailButton from './VerifyEmailButton';

const EditProfileForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.value);
  const { register, handleSubmit, reset } = useForm({resolver: zodResolver(editProfileFormSchema)});
  const submittedData = async (data) => {
    const updatedUserDetails = {
      updatedUsername: data.username,
      updatedFullname: data.fullname,
      updatedBio: data.bio,
      updatedLocation: data.location,
      updatedWebsite: data.website
    };
    try {
      const res = await fetch(`/api/users/profile/${currentUser?.username}`, {
        cache: 'no-store',
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(updatedUserDetails)
      });
      if(!res.ok) {
        throw new Error("Failed to update profile.")
      } else {
        const result = await res.json();
        dispatch(updatedCurrentUserDetails(result.data.user));
        dispatch(updatePost(result.data.user));
        dispatch(updateLike(result.data.user));
        dispatch(updateComment(result.data.user));
        notifySuccess(result.message);
        reset();
        router.push(`/dashboard`);
        router.refresh();
      };
    } catch (error) {
      console.log(error.message);
    };
  };

  return (
    <form
      className='flex flex-col gap-4 px-4 pb-4'
      onSubmit={handleSubmit(submittedData)}
    >
      <div className='flex flex-col gap-1'>
        <label htmlFor="username" className='font-medium'>Username</label>
        <input
          id='username'
          defaultValue={currentUser?.username?.substring(1)}
          className='px-4 py-2 bg-transparent border border-light rounded-md text-white'
          {...register("username")}
        ></input>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="fullname" className='font-medium'>Fullname</label>
        <input
          id='fullname'
          defaultValue={currentUser?.fullname}
          className='px-4 py-2 bg-transparent border border-light rounded-md text-white'
          {...register("fullname")}
        ></input>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="bio" className='font-medium'>Bio</label>
        <textarea
          id='bio'
          cols="30"
          rows="3"
          defaultValue={currentUser?.bio}
          className='px-4 py-2 bg-transparent border border-light rounded-md resize-none text-white'
          {...register("bio")}
        ></textarea>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="location" className='font-medium'>Location</label>
        <input
          id='location'
          defaultValue={currentUser?.location}
          className='px-4 py-2 bg-transparent border border-light rounded-md text-white'
          {...register("location")}
        ></input>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="website" className='font-medium'>Website</label>
        <input
          id='website'
          defaultValue={currentUser?.website}
          className='px-4 py-2 bg-transparent border border-light rounded-md text-white'
          {...register("website")}
        ></input>
      </div>
      <div className='flex flex-col gap-4'>
        <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-150'>Save Changes</button>
        <VerifyEmailButton user={currentUser}/>
        <DeleteAccountButton id={currentUser?._id}/>
      </div>
    </form>
  )
};

export default EditProfileForm;