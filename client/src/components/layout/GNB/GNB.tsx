'use client';

import { useEffect } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  buttonVariants,
  DropDownAvatar,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { SessionType } from '@/types';
import { TypographyH3 } from '../../ui/typography';

export default function GNB({ session }: { session: SessionType }) {
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => router.refresh(), [currentPath, router]);

  return (
    <div className='sticky flex justify-between items-center px-10 my-2 top-0 z-50 backdrop-blur-sm	h-[80px]'>
      <div>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className='ml-8'>
        <Link
          className={buttonVariants({ variant: 'ghost', size: 'sm' })}
          href='/'
        >
          <TypographyH3>Okto</TypographyH3>
        </Link>
      </div>
      <div>
        {session?.message === 'Unauthorized' ? (
          <Link
            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            href='/login'
          >
            Sign In
          </Link>
        ) : (
          <DropDownAvatar
            className='w-[40px] h-[40px]'
            avatarLink={session.profileImage}
            session={session}
          />
        )}
      </div>
    </div>
  );
}
