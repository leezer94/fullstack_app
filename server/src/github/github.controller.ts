import { Body, Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/decorator';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Public()
  @Get('language-uses')
  getLanguageUsesByRepos(
    @Body('owner') owner: string,
    @Body('repo') repo: string,
  ) {
    return this.githubService.getLanguageUsesByRepos({ owner, repo });
  }

  @Public()
  @Get('repo')
  getRepositoriesByLanguage(@Body('language') language: string) {
    return this.githubService.getRepositoriesByLanguage({ language });
  }
}
