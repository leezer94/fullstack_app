import { getFootballGossip } from '@/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import FeedModal from './features/FeedModal';

export default async function GossipCard({
  className,
}: {
  className?: string;
}) {
  const footballFeed = await getFootballGossip();

  return (
    <Card
      className={cn(
        'flex flex-col w-3/6 hover:border-red-200 max-h-[500px]',
        className
      )}
    >
      <CardHeader>
        <CardTitle>Today&apos;s Gossip</CardTitle>
        <CardDescription>{footballFeed.title}</CardDescription>
      </CardHeader>
      <CardContent className='overflow-auto'>
        {footballFeed.item.map((feed, idx) => (
          <div key={feed.link + idx}>
            <FeedModal
              type='Gossip'
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

GossipCard.displayName = 'GossipCard';
