import { getFeArticles } from '@/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  Separator,
} from '@/components/ui';
import FeedModal from './features/FeedModal';

export default async function FeArticles() {
  const FeArticleFeed = await getFeArticles();
  return (
    <Card className='w-full hover:border-red-200'>
      <CardHeader>
        <CardTitle>FE Articles</CardTitle>
        <CardDescription>{FeArticleFeed.description}</CardDescription>
      </CardHeader>
      <CardContent className='overflow-auto max-h-[350px]'>
        {FeArticleFeed.item.map((feed, idx) => (
          <div key={feed.link + idx}>
            <FeedModal
              type='FeArticles'
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
