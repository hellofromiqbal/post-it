"use client";

import { useDispatch } from 'react-redux';
import { fetchCurrentUserDetails } from '@/store/currentUserSlicer';
import { useEffect } from 'react';
import { fetchCurrentPosts } from './currentPostsSlicer';

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/users/profile', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => dispatch(fetchCurrentUserDetails(data.data)))
      .catch(err => console.log(err.message));
  }, []);

  useEffect(() => {
    fetch('/api/posts', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => dispatch(fetchCurrentPosts(data.data)))
      .catch(err => console.log(err.message));
  }, []);

  return <div>{children}</div>;
};