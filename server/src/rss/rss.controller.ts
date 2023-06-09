import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/decorator';
import { RSS_FEEDS } from 'src/constants';
import { RssService } from './rss.service';

@Controller('rss')
export class RssController {
  constructor(private rssService: RssService) {}

  @Public()
  @Get('korean-fe')
  getKoreanFEArticles() {
    return this.rssService.getRssFeed(RSS_FEEDS.FE_ARTICLES);
  }

  @Public()
  @Get('bbc-football')
  getBBCFootballArticles() {
    return this.rssService.getRssFeed(RSS_FEEDS.BBC_FOOTBALL);
  }

  @Public()
  @Get('css-tricks')
  getCssTricksArticles() {
    return this.rssService.getRssFeed(RSS_FEEDS.CSS_TRICS);
  }

  @Public()
  @Get('dev-to')
  getDevToArticles() {
    return this.rssService.getRssFeed(RSS_FEEDS.DEV_TO);
  }

  @Public()
  @Get('tkdodo')
  getTKDODOArticles() {
    return this.rssService.getRssFeed(RSS_FEEDS.TKDODO);
  }
}
