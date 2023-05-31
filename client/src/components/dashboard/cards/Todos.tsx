'use client';

import { Selection } from '@/components/dashboard/cards/features';
import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import Link from 'next/link';

export default function TodosCard() {
  return (
    <Card className='min-h-max'>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>Todos</CardTitle>
          <Selection
            placeholder='SortBy'
            items={['Priority', 'Due Date']}
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
