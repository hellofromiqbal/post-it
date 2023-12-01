"use client";

import { useDispatch } from 'react-redux';
import { saveCurrentUserDetails } from '@/store/currentUserSlicer';
import { useEffect } from 'react';
import { saveCurrentPosts } from './currentPostsSlicer';

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/users/profile', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => dispatch(saveCurrentUserDetails(data.data)))
      .catch(err => console.log(err.message));
  }, []);

  useEffect(() => {
    fetch('/api/posts', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => dispatch(saveCurrentPosts(data.data)))
      .catch(err => console.log(err.message));
  }, []);

  return <div>{children}</div>;
};