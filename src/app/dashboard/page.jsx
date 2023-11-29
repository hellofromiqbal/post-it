"use client"

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveCurrentUserDetails } from '@/store/currentUserSlicer';
import CreatePostForm from '../ui/dashboard/CreatePostForm';
import Feeds from '../ui/dashboard/Feeds';

const FeedPage = () => {
  const currentUser = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/users/profile', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => dispatch(saveCurrentUserDetails(data.data)))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      {console.log(currentUser)}
      <CreatePostForm/>
      <Feeds/>
    </div>
  )
};

export default FeedPage;