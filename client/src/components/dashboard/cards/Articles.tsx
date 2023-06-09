'use client';
import { Suspense, useContext } from 'react';
import { CategoryContent, Selection } from '@/components/dashboard/features';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { ArticlesSkeleton } from '@/components/ui/skeletons';
import { CategoryContext } from '@/contexts';
import { cn } from '@/lib';

export default function ArticlesCard({ className }: { className?: string }) {
  const currentCategory = useContext(CategoryContext);

  return (
    <Card
      className={cn(
        'flex flex-col w-4/6 min-h-[500px] max-h-[500px]',
        className
      )}
    >
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle>Articles</CardTitle>
          <div className='flex justify-center gap-5'>
            <Selection
              className='hidden'
              placeholder='CSS-tricks'
              items={['CSS-tricks', 'Dev.to', 'Java']}
              button={<Button variant='outline'>Get Feeds</Button>}
            />
          </div>
        </div>
        <CardDescription>Articles from {currentCategory}</CardDescription>
      </CardHeader>
      <CardContent className='overflow-auto'>
        <Suspense fallback={<ArticlesSkeleton />}>
          <CategoryContent currentCategory={currentCategory} />
        </Suspense>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <p>...</p>
      </CardFooter>
    </Card>
  );
}
