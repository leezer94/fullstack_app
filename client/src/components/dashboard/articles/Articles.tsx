'use client';

import type { PathType, RssFeedType } from '@/types';
import RSSFeedArticles from '@/components/dashboard/articles/RSSFeedArticles';

export type FeedsType = { title: string; path: Partial<PathType> };

export default function Articles({ articles }: { articles: RssFeedType[] }) {
  if (!articles) return <></>;

  return articles.map((article, idx: number) => (
    <div key={`${article.title}/${idx}`}>
      <RSSFeedArticles articles={article} />
    </div>
  ));
}
