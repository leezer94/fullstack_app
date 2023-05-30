'use client';
import { Selection } from '@/components/dashboard/cards/features';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';

export default function TodosCard() {
  return (
    <Card className='min-h-max'>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>Todos</CardTitle>
          <Selection
            placeholder='SortBy'
            items={['Priority', 'Due Date']}
            button={<Button variant='outline'>Open</Button>}
          />
        </div>
        <CardDescription>Your Todos sorted by Priority</CardDescription>
      </CardHeader>
      <CardContent>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
