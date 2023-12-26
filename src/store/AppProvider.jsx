"use client";

import { useDispatch } from 'react-redux';
import { fetchCurrentUserDetails } from '@/store/currentUserSlicer';
import { useEffect } from 'react';
import { fetchCurrentPosts } from './currentPostsSlicer';
import { fetchCurrentComments } from './currentCommentsSlicer';
import { fetchCurrentLikes } from './currentLikesSlicer';

export const AppProvider = ({ children }) => {
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

  useEffect(() => {
    fetch('/api/comments', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => dispatch(fetchCurrentComments(data.data)))
      .catch(err => console.log(err.message));
  }, []);

  useEffect(() => {
    fetch('/api/likes', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => dispatch(fetchCurrentLikes(data.data)))
      .catch(err => console.log(err.message));
  }, []);

  return <div>{children}</div>;
};