import React from 'react';
import BackButton from '@/app/ui/dashboard/BackButton';
import ChangePasswordForm from '@/app/ui/dashboard/ChangePasswordForm';

const ChangePasswordPage = ({params}) => {
  console.log(params);
  return (
    <div className='bg-softDark text-light shadow-md md:rounded-md flex flex-col gap-0'>
      <BackButton/>
      <ChangePasswordForm username={params?.username}/>
    </div>
  )
};

export default ChangePasswordPage;