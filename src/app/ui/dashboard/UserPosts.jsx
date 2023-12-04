import React from 'react';
import Link from 'next/link';
import ContentCard from './ContentCard';
import { useSelector } from 'react-redux';

const UserPosts = ({userId}) => {
  const currentPosts = useSelector(state => state.currentPosts.value);
  return (
    <div className='bg-softDark rounded-md shadow-md text-light overflow-hidden'>
      {currentPosts.filter(item => item.authorId === userId).map(post => (
        <Link key={post?._id} href={`/dashboard/posts/${post?._id}`}>
          <ContentCard data={post} contentType='profile'/>
        </Link>
      ))}
    </div>
  )
}

export default UserPosts