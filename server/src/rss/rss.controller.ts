import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Public } from 'src/auth/decorator';
import { RssService } from './rss.service';

@Controller('rss')
export class RssController {
  constructor(private rssService: RssService) {}

  @Public()
  @Get('korean-fe')
  getKoreanFEArticles() {
    const url = 'https://kofearticle.substack.com/feed';

    return this.rssService.getRssFeed(url);
  }

  @Public()
  @Get('bbc-football')
  getBBCFootballArticles() {
    const url = 'https://feeds.bbci.co.uk/sport/football/rss.xml';

    return this.rssService.getRssFeed(url);
  }

  @Public()
  @Get('css-tricks')
  getCssTricksArticles() {
    const url = 'https://css-tricks.com/feed/';

    return this.rssService.getRssFeed(url);
  }

  @Public()
  @Get('dev-to')
  getDevToArticles() {
    const url = 'https://dev.to/feed';

    return this.rssService.getRssFeed(url);
  }
}
