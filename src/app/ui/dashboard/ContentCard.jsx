"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DeleteButton from './DeleteButton';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import ShareButton from './ShareButton';
import { useSelector } from 'react-redux';

const ContentCard = ({ data, contentType = 'post', customPadding = 'p-4' }) => {
  const currentUser = useSelector(state => state.currentUser.value);
  const generateDate = (timestamp) => {
    const date = new Date(timestamp).toLocaleDateString();
    const [hours, minutes, seconds] = new Date(timestamp).toLocaleTimeString().split(":");
    const timeUnit = seconds?.split(" ")[1];
    return `${date} - ${hours}:${minutes} ${timeUnit}`;
  };
  return (
    <div className={`flex flex-row gap-4 w-full ${customPadding}`}>
      <div>
        <Link href={`/dashboard/profile/${data?.authorUsername}`}>
          <div className='w-[50px] h-[50px] rounded-full bg-light relative overflow-hidden'>
            <Image src={data?.authorProfilePictureUrl} alt='profpic' fill className='object-cover'/>
          </div>
        </Link>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='flex flex-col'>
          <div className='flex gap-2 items-center'>
            <Link href={`/dashboard/profile/${data?.authorUsername}`} className='font-semibold'>
              {data?.authorFullname}
            </Link>
            <Link href={`/dashboard/profile/${data?.authorUsername}`} className='text-sm opacity-70'>
              {data?.authorUsername}
            </Link>
            <small href={`/dashboard/profile/${data?.authorUsername}`} className='text-xs opacity-50'>
              {generateDate(data?.createdAt)}
            </small>
          </div>
          <p className='opacity-70'>{data?.textContent}</p>
        </div>
        <div className={`flex justify-end items-center gap-10 text-light text-xs ${contentType !== 'comment' ? 'text-base' : 'text-xs' }`}>
          <LikeButton id={data?._id} contentType={contentType} currentUser={currentUser}/>
          <CommentButton id={data?._id} contentType={contentType}/>
          <ShareButton contentType={contentType}/>
          {currentUser?._id === data?.authorId &&
            <DeleteButton id={data?._id} contentType={contentType}/>
          }
        </div>
      </div>
    </div>
  )
};

export default ContentCard;