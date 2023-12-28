import React from 'react';
import { notifyFailed, notifySuccess } from '@/helpers/toaster';
import { useDispatch, useSelector } from 'react-redux';
import { updatedCurrentUserDetails } from '@/store/currentUserSlicer';

const FollowButton = ({ profileOwner }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.value);
  const userFollowed = currentUser?.following?.find(user => user.username === profileOwner.username);

  const handleClick = async () => {
    try {
      const res = await fetch(`/api/users/${userFollowed ? 'unfollowing' : 'following'}/${currentUser?.username}`, {
        cache: 'no-store',
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(profileOwner)
      });
      if(!res.json) {
        const result = await res.json();
        throw new Error(result.message);
      } else {
        const result = await res.json();
        if(userFollowed) {
          dispatch(updatedCurrentUserDetails(result.data.unfollowingUser));
        } else {
          dispatch(updatedCurrentUserDetails(result.data.followingUser));
        }
        notifySuccess(result.message);
      };
    } catch (error) {
      notifyFailed(error.message);
    };
  };
  return (
    <button
      className='bg-green-500 text-black font-semibold rounded-full px-4 py-2 text-sm'
      onClick={handleClick}
    >{userFollowed ? 'Unfollow' : 'Follow'}</button>
  )
};

export default FollowButton;