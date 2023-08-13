'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

type SideBarProps = {
  links: SideBarLinks[];
};

const SideBar = ({ links }: SideBarProps) => {
  const pathname = usePathname();

  return (
    <aside className='fixed h-screen'>
      <ul className='flex flex-col gap-5'>
        {links.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <li key={i}>
              <Link
                className={isActive ? 'text-blue-600' : 'text-[hsla(0,0%,63%)]'}
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
