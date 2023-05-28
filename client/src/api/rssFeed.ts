import axios from 'axios';

import { RssFeedType } from '@/types';

export const getFeArticles = async (): Promise<RssFeedType> => {
  const { data } = await axios.get('http://localhost:8000/rss/korean-fe');

  return data;
};

export const getFootballGossip = async (): Promise<RssFeedType> => {
  const { data } = await axios.get('http://localhost:8000/rss/bbc-football');

  return data;
};
