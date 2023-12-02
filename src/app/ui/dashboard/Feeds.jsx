"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ContentCard from './ContentCard';
import { useSelector } from 'react-redux';

const Feeds = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("/api/posts/", { cache: 'no-store' })
  //     .then(res => res.json())
  //     .then(data => setPosts(data.data))
  //     .catch(err => console.log(err.message));
  // }, []);
  const posts = useSelector(state => state.currentPosts.value);

  return (
    <div className='bg-softDark rounded-md shadow-md text-light overflow-hidden'>
      {posts?.map(post => (
        <Link key={post?._id} href={`/dashboard/posts/${post?._id}`}>
          <ContentCard data={post}/>
        </Link>
      ))}
    </div>
  )
};

export default Feeds;