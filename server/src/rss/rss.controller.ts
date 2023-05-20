import { Controller, Get } from '@nestjs/common';
import { RssService } from './rss.service';

@Controller('rss')
export class RssController {
  constructor(private rssService: RssService) {}

  @Get('korean-fe')
  getKoreanFEArticles() {
    const url = 'https://kofearticle.substack.com/feed';

    return this.rssService.getRssFeed(url);
  }

  @Get('bbc-football')
  getBBCFootballArticles() {
    const url = 'https://feeds.bbci.co.uk/sport/football/rss.xml';

    return this.rssService.getRssFeed(url);
  }
}
