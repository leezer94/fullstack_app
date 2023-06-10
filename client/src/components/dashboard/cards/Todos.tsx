'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Selection } from '@/components/dashboard/features';
import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { cn } from '@/lib';

export default function TodosCard({ className }: { className?: string }) {
  return (
    <Card className={cn('min-h-max', className)}>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>Todos</CardTitle>
          <Selection
            placeholder='SortBy'
            button={
              <Link
                href='/todos'
                className={buttonVariants({ variant: 'outline' })}
              >
                Open
              </Link>
            }
          />
        </div>
        <CardDescription>Your Todos sorted by Priority</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
