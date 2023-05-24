'use client';

import { useRouter } from 'next/navigation';
import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { cn } from '@/lib/utils';

export default function UserStatus({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Card className={cn('w-2/6', className)}>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>User</CardTitle>
          <Button variant='outline' size='sm'>
            Details
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => router.push('/login')}
          >
            Sign In
          </Button>
        </div>
        <CardDescription>Your status</CardDescription>
      </CardHeader>
    </Card>
  );
}
