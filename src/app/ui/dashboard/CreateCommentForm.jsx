"use client"

import { createComment } from '@/store/currentCommentsSlicer';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { notifySuccess } from '@/helpers/toaster';
import { createCommentFormSchema } from '@/helpers/zodSchema';


const CreateCommentForm = ({ data: postData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.value);
  const currentComments = useSelector(state => state.currentComments.value);
  const currentPostComments = currentComments.filter(comment => comment.postId === postData?._id);
  const { register, handleSubmit, reset } = useForm({resolver: zodResolver(createCommentFormSchema)});
  const submittedData = async (data) => {
    const newComment = {
      postId: postData?._id,
      postAuthorId: postData?.authorId,
      authorId: currentUser?._id,
      authorUsername: currentUser?.username,
      authorFullname: currentUser?.fullname,
      authorProfilePictureUrl: currentUser?.profilePictureUrl,
      textContent: data.textContent
    };
    try {
      const res = await fetch(`/api/comments/`, {
        cache: 'no-store',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newComment)
      });
      if(!res.ok) {
        throw new Error("Failed to comment.")
      } else {
        const result = await res.json();
        dispatch(createComment(result.data));
        notifySuccess(result.message);
        reset();
        router.refresh();
      };
    } catch (error) {
      console.log(error.message);
    };
  };

  return (
    <form
      className={`flex flex-col gap-4 p-4 ${currentPostComments.length > 0 && 'border-b border-b-gray-700'}`}
      onSubmit={handleSubmit(submittedData)}
    >
      <textarea
        placeholder='Post your comment'
        className='px-4 py-2 bg-transparent border border-light rounded-md resize-none'
        {...register("textContent")}
      ></textarea>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-150'>Comment</button>
    </form>
  )
};

export default CreateCommentForm;