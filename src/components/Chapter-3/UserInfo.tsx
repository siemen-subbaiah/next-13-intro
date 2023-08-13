import { getUser } from '@/lib/getUsers';
import { notFound } from 'next/navigation';
import React from 'react';

const UserInfo = async ({ id }: { id: number }) => {
  const user = await getUser(id);

  if (!user) {
    notFound();
  }

  return (
    <>
      <h1 className='text-2xl my-3'>{user.name}</h1>
      <p className='my-2'>
        {' '}
        <span className='font-semibold'>Username :</span> {user.username}
      </p>
      <p className='my-2'>
        {' '}
        <span className='font-semibold'>Number :</span> {user.phone}
      </p>
      <p className='my-2'>
        {' '}
        <span className='font-semibold'>Email :</span> {user.email}
      </p>
      <p className='my-2'>
        {' '}
        <span className='font-semibold'>Company :</span> {user.company.name}
      </p>
      <p className='my-2'>
        {' '}
        <span className='font-semibold'>City : </span>
        {user.address.city}
      </p>
    </>
  );
};

export default UserInfo;
