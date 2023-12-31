import BackButton from '@/app/ui/dashboard/BackButton';
import EditProfileForm from '@/app/ui/dashboard/EditProfileForm';
import React from 'react';

const EditProfilePage = () => {
  return (
    <div className='bg-softDark text-light shadow-md md:rounded-md flex flex-col gap-0 pt-2 md:pt-0'>
      <BackButton/>
      <EditProfileForm/>
    </div>
  )
};

export default EditProfilePage;