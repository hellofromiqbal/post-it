"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DeleteButton from './DeleteButton';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import ShareButton from './ShareButton';
import { useSelector } from 'react-redux';
import { generateDate } from '@/helpers/dateGenerator';

const ContentCard = ({ data, contentType = 'post', customPadding = 'p-4' }) => {
  const currentUser = useSelector(state => state.currentUser.value);
  return (
    <div className={`flex flex-row gap-4 w-full ${customPadding} border-b-[.5px] border-b-gray-700`}>
      <div>
        <Link href={`/dashboard/profile/${data?.authorUsername}`}>
          <div className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full bg-light relative overflow-hidden'>
            <Image src={data?.authorProfilePictureUrl} alt='profpic' fill className='object-cover'/>
          </div>
        </Link>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='flex flex-col gap-1 md:gap-0'>
          <div className='flex justify-between md:justify-normal md:items-center gap-0 md:gap-2'>
            <div className='flex flex-col md:flex-row md:items-center gap-0 md:gap-2'>
              <Link href={`/dashboard/profile/${data?.authorUsername}`} className='text-base font-semibold'>
                {data?.authorFullname}
              </Link>
              <Link href={`/dashboard/profile/${data?.authorUsername}`} className='-mt-1 md:mt-0 text-xs md:text-sm opacity-70'>
                {data?.authorUsername}
              </Link>
            </div>
            <small href={`/dashboard/profile/${data?.authorUsername}`} className='mt-1 md:mt-0 text-xs opacity-50'>
              {generateDate(data?.createdAt)}
            </small>
          </div>
          <p className='text-base opacity-70'>{data?.textContent}</p>
        </div>
        <div className={`flex justify-end items-center gap-10 text-light text-xs ${contentType !== 'comment' ? 'text-base' : 'text-xs' }`}>
          <LikeButton data={data} contentType={contentType} currentUser={currentUser}/>
          <CommentButton id={data?._id} contentType={contentType}/>
          {contentType !== 'comment' &&
            <ShareButton contentType={contentType}/>
          }
          {currentUser?._id === data?.authorId ?
            <DeleteButton id={data?._id} contentType={contentType}/>
            :
            contentType === 'comment' ?
              <DeleteButton id={data?._id} contentType={contentType}/>
              :
              ''
          }
        </div>
      </div>
    </div>
  )
};

export default ContentCard;