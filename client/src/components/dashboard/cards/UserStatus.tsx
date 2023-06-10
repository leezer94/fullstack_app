'use client';

import type { SessionType } from '@/types';
import Link from 'next/link';
import {
  buttonVariants,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  DropDownAvatar,
} from '@/components/ui';
import { cn } from '@/lib/utils';

export default function UserStatus({
  className,
  session,
}: {
  className?: string;
  session: SessionType;
}) {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>{session.firstName || 'User'}</CardTitle>
          {session?.message === 'Unauthorized' ? (
            <Link
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
              href='/login'
            >
              Sign In
            </Link>
          ) : (
            <DropDownAvatar
              avatarLink={session.profileImage}
              userName={session.lastName}
            />
          )}
        </div>

        <CardContent>{/* <UserTabs /> */}</CardContent>
      </CardHeader>
    </Card>
  );
}
