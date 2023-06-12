'use client';

import { GithubIcon, Link as LinkIcon, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui';
import { TypographyMuted } from '../../ui/typography';

export default function Footer() {
  return (
    <footer className='mt-20'>
      <div>
        <TypographyMuted>Okto</TypographyMuted>
      </div>
      <div className='w-full flex justify-around items-center'>
        <Link
          href='https://github.com/leezer94'
          className={buttonVariants({ variant: 'default' })}
          target='_blank'
        >
          <GithubIcon />
        </Link>
        <Link
          href='https://www.linkedin.com/in/keonhee-lee-2964b421a/'
          className={buttonVariants({ variant: 'default' })}
          target='_blank'
        >
          <Linkedin />
        </Link>
        <Link
          href='https://medium.com/@2kunhee94'
          className={buttonVariants({ variant: 'default' })}
          target='_blank'
        >
          <LinkIcon />
        </Link>
        <Link
          href='https://keonheelee.vercel.app/'
          className={buttonVariants({ variant: 'default' })}
          target='_blank'
        >
          Blog
        </Link>
      </div>
    </footer>
  );
}
