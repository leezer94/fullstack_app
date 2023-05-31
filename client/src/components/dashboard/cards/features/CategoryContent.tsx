'use client';

import { useEffect } from 'react';
import { getCssTricksArticles, getDevToArticles } from '@/api';
import FeedModal from '@/components/dashboard/cards/features/FeedModal';
import { Separator } from '@/components/ui';

import { useCustomQuery } from '@/lib/hooks/query';

export default function CategoryContent({
  currentCategory,
}: {
  currentCategory: string;
}) {
  const { data: cssTricksArticles } = useCustomQuery(
    ['css-articles'],
    getCssTricksArticles
  );
  const { data: devToArticles } = useCustomQuery(
    ['dev.to-articles'],
    getDevToArticles
  );

  useEffect(() => {
    console.log(currentCategory);
  }, [currentCategory]);

  return (
    <>
      {currentCategory === 'Dev.to'
        ? devToArticles?.item.map((feed, idx) => (
            <div key={feed.link + idx} className='overflow-auto'>
              <FeedModal
                type='Dev.to'
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
        : currentCategory === 'CSS-tricks'
        ? cssTricksArticles?.item.map((feed, idx) => (
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
        : null}
    </>
  );
}
