import Posts from '@/components/Chapter-3/Posts';
import UserInfo from '@/components/Chapter-3/UserInfo';
import Loader from '@/components/common/Loader';
import { getUser, getUsers } from '@/lib/getUsers';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { Suspense } from 'react';

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const id = Number(params.id);
  const user = await getUser(id);

  if (!user) {
    return {
      title: `Users | Not Found`,
    };
  }

  return {
    title: `Users | ${user.username}`,
  };
}

const SingleUserPage = async ({ params }: Params) => {
  const id = Number(params.id);

  return (
    <div>
      <p>
        <Link href='/chapter-3/users' className='text-blue-600'>
          Back
        </Link>
      </p>

      <Suspense fallback={<h1 className='text-xl'>Loading user data</h1>}>
        <UserInfo id={id} />
      </Suspense>
      <hr className='text-[hsla(0,0%,12%)]' />
      <Suspense fallback={<Loader />}>
        <Posts id={id} />
      </Suspense>
    </div>
  );
};

export async function generateStaticParams() {
  const users = await getUsers();

  if (users) {
    return users.map((user) => ({
      id: user.id.toString(),
    }));
  }
}

export default SingleUserPage;
