import { getUsers } from '@/lib/getUsers';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dave Gray Next 13 | Chapter 3 -Users',
};

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div>
      <h1 className='text-2xl'>Users</h1>
      <div className='grid grid-cols-3 gap-5'>
        {users.map((user) => {
          return (
            <section
              key={user.id}
              className='mt-3 p-3 border border-[hsla(0,0%,12%)] rounded-md'
            >
              <Link href={`/chapter-3/users/${user.id}`}>
                <h1 className='text-lg mb-2'>{user.name}</h1>
                <p>{user.phone}</p>
                <p>{user.email}</p>
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default UsersPage;
