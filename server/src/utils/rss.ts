import axios, { AxiosResponse } from 'axios';
import { parseStringPromise } from 'xml2js';

export const parseRssFeedArticles = async (url: string): Promise<any> => {
  const response: AxiosResponse<string> = await axios.get(url);
  const xml = response.data;

  const result = await parseStringPromise(xml, {
    explicitArray: false,
  });

  const { title, description, item } = await result.rss.channel;

  return { title, description, item };
};
