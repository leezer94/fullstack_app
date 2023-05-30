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

export const getCssTricksArticles = async (): Promise<RssFeedType> => {
  const { data } = await axios.get('http://localhost:8000/rss/css-tricks');

  return data;
};

export const getDevToArticles = async (): Promise<RssFeedType> => {
  const { data } = await axios.get('http://localhost:8000/rss/dev-to');

  return data;
};
