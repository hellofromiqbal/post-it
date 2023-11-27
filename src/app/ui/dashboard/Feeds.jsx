"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Feeds = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts/read", { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setPosts(data.data))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      {posts.map(post => (
        <div key={post._id} className='flex flex-row gap-4 bg-softDark rounded-md p-4 shadow-md text-light'>
          <div>
            <div className='w-[50px] h-[50px] rounded-full bg-light relative overflow-hidden'>
              <Image src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" alt='profpic' fill className='object-cover'/>
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className='font-semibold'>@pedromachado</h2>
            <p className='opacity-70'>Only when I change my browser Tab and then change Tab into my application again the client-side code is getting fetched and executed.</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Feeds;