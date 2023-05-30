'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Button,
  buttonVariants,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { cn } from '@/lib/utils';

export default function UserStatus({ className }: { className?: string }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');

    setToken(access_token);
  }, [token]);

  return (
    <Card className={cn('w-3/6', className)}>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>User</CardTitle>
          {token ? (
            <div>
              <Button variant='outline' size='sm'>
                Details
              </Button>
            </div>
          ) : (
            <Link
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
              href='/login'
            >
              Sign In
            </Link>
          )}
        </div>
        <CardDescription>Your status</CardDescription>
      </CardHeader>
    </Card>
  );
}
