'use client';
import { Suspense, useContext } from 'react';
import {
  CategoryContent,
  Selection,
} from '@/components/dashboard/cards/features';
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

export default function ArticlesCard() {
  const currentCategory = useContext(CategoryContext);

  return (
    <Card className='flex flex-col w-4/6 min-h-[500px] max-h-[500px]'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle>Articles</CardTitle>
          <div className='flex justify-center gap-5'>
            <Selection
              placeholder='CSS-tricks'
              items={['CSS-tricks', 'Dev.to', 'Java']}
              button={<Button variant='outline'>Get Feeds</Button>}
            />
            {/* <FeedForm /> */}
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
