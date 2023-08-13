import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import SideBar from '@/components/common/SideBar';
import { chapter3SideBarLinks } from '@/data/SideBarLinks';

export const metadata: Metadata = {
  title: 'Dave Gray Next 13 | Chapter 3',
};

const Chapter2Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className='grid grid-cols-12'>
      <section className='col-span-2'>
        <SideBar links={chapter3SideBarLinks} />
      </section>
      <section className='col-span-10'>{children}</section>
    </section>
  );
};

export default Chapter2Layout;
