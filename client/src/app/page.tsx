import Card from '@/components/animations/scroll-cards';
import { Articles } from '@/components/dashboard/articles';
import { RssFeedType } from '@/types';
import { getRssFeeds } from '../api/rssFeed';

export default async function Home() {
  const articles: RssFeedType[] = await Promise.all([
    getRssFeeds('bbc-football'),
    getRssFeeds('korean-fe'),
    getRssFeeds('css-tricks'),
    getRssFeeds('dev-to'),
    getRssFeeds('tkdodo'),
  ]);
  return (
    <div className='p-10'>
      <Card>
        <Articles articles={articles} />
      </Card>
    </div>
  );
}
