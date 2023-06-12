import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  Separator,
} from '@/components/ui';
import { RssFeedType, PathType } from '@/types';
import FeedModal from '../features/FeedModal';

// const FEED_ITEMS = [
//   { title: 'BBC Sport - Football', path: 'BBC Sport - Football' },
//   { title: 'Korean FE article', path: 'BBC Sport - Football' },
//   { title: 'CSS-Tricks', path: 'BBC Sport - Football' },
//   { title: 'DEV Community', path: 'BBC Sport - Football' },
//   { title: "TkDodo's blog", path: 'BBC Sport - Football' },
// ];

export interface ArticlesProps {
  path: PathType;
}
export default function RSSFeedArticles({
  articles,
}: {
  articles: RssFeedType;
}) {
  return (
    <Card className='w-10/12 overflow-scroll'>
      <CardHeader>
        <CardTitle>{articles?.title}</CardTitle>
        <CardDescription>{articles?.description}</CardDescription>
      </CardHeader>
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
      <CardFooter className='flex justify-center'>
        <p>...</p>
      </CardFooter>
    </Card>
  );
}
