import type { PathType, RssFeedType } from '@/types';
import axiosClient from './axiosInstance';

export const getRssFeeds = async (path: PathType): Promise<RssFeedType> => {
  const { data } = await axiosClient.get(`rss/${path}`);

  return data;
};
