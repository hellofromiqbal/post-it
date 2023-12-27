import React from 'react';
import { notifyFailed, notifySuccess } from '@/helpers/toaster';
import { useDispatch } from 'react-redux';
import { updatedCurrentUserDetails } from '@/store/currentUserSlicer';

const UnfollowButton = ({ currentUser, userToBeUnfollowed }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const res = await fetch(`/api/users/unfollowing/${currentUser?.username}`, {
        cache: 'no-store',
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(userToBeUnfollowed)
      });
      if(!res.json) {
        const result = await res.json();
        throw new Error(result.message);
      } else {
        const result = await res.json();
        dispatch(updatedCurrentUserDetails(result?.unfollowingUser.data));
        notifySuccess(result.message);
      };
    } catch (error) {
      notifyFailed(error.message);
    };
  };
  return (
    <button
      className='bg-softDark text-green-500 font-semibold border-2 border-green-500 rounded-full px-4 py-2 text-sm'
      onClick={handleClick}
    >Unfollow</button>
  )
};

export default UnfollowButton;