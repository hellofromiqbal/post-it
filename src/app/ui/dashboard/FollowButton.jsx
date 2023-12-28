import React, { useEffect, useState } from 'react';
import { notifyFailed, notifySuccess } from '@/helpers/toaster';
import { useDispatch, useSelector } from 'react-redux';
import { updatedCurrentUserDetails } from '@/store/currentUserSlicer';

const FollowButton = ({ userToBeFollowed }) => {
  const currentUser = useSelector(state => state.currentUser.value);
  const dispatch = useDispatch();

  const [userAlreadyFollowed, setUserAlreadyFollowed] = useState();

  useEffect(() => {
    const isUserAlreadyFollowed = currentUser.following.find(user => user.username === userToBeFollowed.username);
    if(isUserAlreadyFollowed) {
      setUserAlreadyFollowed(true);
    } else {
      setUserAlreadyFollowed(false);
    };
  }, [userAlreadyFollowed]);

  const handleClick = async () => {
    try {
      const res = await fetch(`/api/users/${userAlreadyFollowed ? 'unfollowing' : 'following'}/${currentUser?.username}`, {
        cache: 'no-store',
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(userToBeFollowed)
      });
      if(!res.json) {
        const result = await res.json();
        throw new Error(result.message);
      } else {
        const result = await res.json();
        dispatch(updatedCurrentUserDetails(result.data.followingUser));
        setUserAlreadyFollowed(prev => !prev);
        notifySuccess(result.message);
      };
    } catch (error) {
      notifyFailed(error.message);
    };
  };
  return (
    <button
      className={`${userAlreadyFollowed ? 'bg-transparent border-2 border-green-500 text-green-500' : 'bg-green-500 text-black'} font-semibold rounded-full px-4 py-2 text-sm`}
      onClick={handleClick}
    >{userAlreadyFollowed ? 'Unfollowed' : 'Follow'}</button>
  )
};

export default FollowButton;