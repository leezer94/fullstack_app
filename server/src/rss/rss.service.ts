import { Injectable } from '@nestjs/common';
import { parseRssFeedArticles } from '../utils/rss';

interface RssFeed {
  title: string;
  description: string;
  item: object[];
}

@Injectable()
export class RssService {
  async getRssFeed(url: string): Promise<RssFeed | any> {
    return await parseRssFeedArticles(url);
  }
}
