import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dave Gray Next 13 | Chapter 2 - About',
};

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-2xl'>About Page</h1>
      <p className='my-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        nesciunt totam libero, sapiente quas eveniet ratione, rerum mollitia,
        blanditiis odio ipsam itaque magnam voluptatem. Iusto quidem sit eveniet
        quisquam ducimus!
      </p>
    </div>
  );
};

export default AboutPage;
