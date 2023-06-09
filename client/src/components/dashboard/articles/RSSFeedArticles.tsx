import type { PathType } from '@/types';
import { Suspense } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  Separator,
} from '@/components/ui';
import { ArticlesSkeleton } from '@/components/ui/skeletons';
import { RssFeedType } from '@/types';
import FeedModal from '../features/FeedModal';

export interface ArticlesProps {
  path: PathType;
}
export default function RSSFeedArticles({
  articles,
}: {
  articles: RssFeedType | undefined;
}) {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>{articles?.title}</CardTitle>
        <CardDescription>{articles?.description}</CardDescription>
      </CardHeader>
      <Suspense fallback={<ArticlesSkeleton />}>
        <CardContent className='overflow-auto max-h-[350px]'>
          {articles?.item.map((feed, idx) => (
            <div key={feed.link + idx}>
              <FeedModal
                type='korean-fe'
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
      </Suspense>
      <CardFooter className='flex justify-center'>
        <p>...</p>
      </CardFooter>
    </Card>
  );
}
