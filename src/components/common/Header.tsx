'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className='flex py-5 px-20 justify-between border-b sticky top-0 bg-black'>
      <h1 className='text-2xl'>
        <Link href='/'>Dave Gray Next-13</Link>
      </h1>
      <ul className='flex items-center gap-5'>
        <li>
          <Link
            className={
              pathname.includes('/chapter-2')
                ? 'text-blue-600'
                : 'text-[hsla(0,0%,63%)]'
            }
            href='/chapter-2'
          >
            Chapter-2
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname.includes('/chapter-3')
                ? 'text-blue-600'
                : 'text-[hsla(0,0%,63%)]'
            }
            href='/chapter-3'
          >
            Chapter-3
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
