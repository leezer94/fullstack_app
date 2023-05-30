'use client';
import { getCssTricksArticles, getDevToArticles } from '@/api';
import { FeedModal, Selection } from '@/components/dashboard/cards/features';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from '@/components/ui';

export default async function GoodsCard() {
  // needs to be changed here to server component -> client component ?
  const state: 'article' | 'articledd' = 'article';

  const [cssTricksArticles, devToArticles] = await Promise.all([
    getCssTricksArticles(),
    getDevToArticles(),
  ]);

  return (
    <Card className='flex flex-col w-4/6 min-h-[500px] max-h-[500px]'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle>Goods</CardTitle>
          <Selection
            placeholder='CSS tricks'
            items={['CSS tricks', 'Dev.to', 'Java']}
            button={<Button variant='outline'>Get Feeds</Button>}
          />
        </div>
        <CardDescription>Products from A24</CardDescription>
      </CardHeader>
      <CardContent className='overflow-auto'>
        {state === 'article'
          ? devToArticles.item.map((feed, idx) => (
              <div key={feed.link + idx} className='overflow-auto'>
                <FeedModal
                  type='CSS-tricks'
                  button={
                    <p className='pb-5 pt-5 cursor-pointer hover:text-red-300'>
                      {feed.title}
                    </p>
                  }
                  feed={feed}
                />
                <Separator />
              </div>
            ))
          : cssTricksArticles.item.map((feed, idx) => (
              <div key={feed.link + idx} className='overflow-auto'>
                <FeedModal
                  type='CSS-tricks'
                  button={
                    <p className='pb-5 pt-5 cursor-pointer hover:text-red-300'>
                      {feed.title}
                    </p>
                  }
                  feed={feed}
                />
                <Separator />
              </div>
            ))}
      </CardContent>
      <CardFooter className='flex justify-center'>
        <p>...</p>
      </CardFooter>
    </Card>
  );
}
