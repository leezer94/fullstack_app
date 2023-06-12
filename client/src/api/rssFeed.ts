import type { PathType, RssFeedType } from '@/types';

export const getRssFeeds = async (path: PathType): Promise<RssFeedType> => {
  const response = await fetch(`http://localhost:8000/rss/${path}`, {
    cache: 'no-store',
  }).then((res) => res.json());

  return response;
};
