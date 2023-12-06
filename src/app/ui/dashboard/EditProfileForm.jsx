"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentUserDetails } from '@/store/currentUserSlicer';

const EditProfileForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.value);
  const { register, handleSubmit, reset } = useForm();
  const submittedData = async (data) => {
    const updatedUserProfile = {
      fullname: data.fullname,
      bio: data.bio,
      location: data.location,
      website: data.website
    };
    console.log(updatedUserProfile);
    try {
      const res = await fetch(`/api/users/profile/${currentUser?.username}`, {
        cache: 'no-store',
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(updatedUserProfile)
      });
      if(!res.ok) {
        throw new Error("Failed to update user profile.")
      } else {
        const result = await res.json();
        // dispatch(updateCurrentUserDetails(result.data));
        reset();
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
        <label htmlFor="fullname" className='font-medium'>Fullname</label>
        <input
          id='fullname'
          defaultValue={currentUser?.fullname}
          className='px-4 py-2 bg-transparent border border-light rounded-md'
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
          className='px-4 py-2 bg-transparent border border-light rounded-md resize-none'
          {...register("bio")}
        ></textarea>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="location" className='font-medium'>Location</label>
        <input
          id='location'
          defaultValue={currentUser?.location}
          className='px-4 py-2 bg-transparent border border-light rounded-md'
          {...register("location")}
        ></input>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="website" className='font-medium'>Website</label>
        <input
          id='website'
          defaultValue={currentUser?.website}
          className='px-4 py-2 bg-transparent border border-light rounded-md'
          {...register("website")}
        ></input>
      </div>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-150'>Post</button>
    </form>
  )
};

export default EditProfileForm;