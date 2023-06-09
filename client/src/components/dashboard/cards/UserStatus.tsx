'use client';

import type { User } from '@/types';
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
  session: User &
    Partial<{
      statusCode: 401;
      message: 'Unauthorized';
    }>;
}) {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>User</CardTitle>
          {session?.message === 'Unauthorized' ? (
            <Link
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
              href='/login'
            >
              Sign In
            </Link>
          ) : (
            <DropDownAvatar
              avatarLink={
                session.profileImage || 'https://i.stack.imgur.com/frlIf.png'
              }
              userName={session.firstName}
            />
          )}
        </div>
        <p>{session?.email}</p>
        <CardContent>{/* <UserTabs /> */}</CardContent>
      </CardHeader>
    </Card>
  );
}
