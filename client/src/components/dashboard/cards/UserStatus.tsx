'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserTabs } from '@/components/dashboard/cards/features';
import {
  ButtonLoading,
  buttonVariants,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  DropDownAvatar,
} from '@/components/ui';
import { cn } from '@/lib/utils';

export default function UserStatus({ className }: { className?: string }) {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const access_token = localStorage.getItem('access_token');

    if (access_token) {
      setIsLoading(false);
      setToken(access_token);
    }
  }, [token, isLoading]);

  return (
    <Card className={cn('w-3/6', className)}>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>User</CardTitle>
          {token ? (
            <DropDownAvatar
              avatarLink='https://github.com/leezer94.png'
              userName='Leezer'
            />
          ) : isLoading ? (
            <Link
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
              href='/login'
            >
              Sign In
            </Link>
          ) : (
            <ButtonLoading />
          )}
        </div>
        <CardContent>
          <UserTabs />
        </CardContent>
      </CardHeader>
    </Card>
  );
}
