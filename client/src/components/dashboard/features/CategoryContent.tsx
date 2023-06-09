'use client';

import type { PathType } from '@/types';
import { getRssFeeds } from '@/api';
import FeedModal from '@/components/dashboard/features/FeedModal';
import { Separator } from '@/components/ui';

import { useCustomQuery } from '@/lib/hooks/query';

export default function CategoryContent({
  currentCategory,
}: {
  currentCategory: PathType | string;
}) {
  const { data: cssTricksArticles } = useCustomQuery(['css-articles'], () =>
    getRssFeeds('css-tricks')
  );
  const { data: devToArticles } = useCustomQuery(['dev.to-articles'], () =>
    getRssFeeds('dev-to')
  );

  return (
    <>
      {currentCategory === 'dev-to'
        ? devToArticles?.item.map((feed, idx) => (
            <div key={feed.link + idx} className='overflow-auto'>
              <FeedModal
                type='dev-to'
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
        : currentCategory === 'css-tricks'
        ? cssTricksArticles?.item.map((feed, idx) => (
            <div key={feed.link + idx} className='overflow-auto'>
              <FeedModal
                type='css-tricks'
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
        : null}
    </>
  );
}
