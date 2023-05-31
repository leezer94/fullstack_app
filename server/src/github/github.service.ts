import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { ConfigService } from '@nestjs/config';
import { SECRET_KEY } from '../constants/keys';

export interface SearchParams {
  q: string;
  sort: 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
  order: 'desc' | 'asc';
  per_page?: number;
  page?: number;
}

@Injectable()
export class GithubService {
  octokit;
  constructor(private config: ConfigService) {
    this.octokit = new Octokit({
      auth: this.config.get(SECRET_KEY.GITHUB_AUTH_TOKEN),
    });
  }

  async getLanguageUsesByRepos({
    owner,
    repo,
  }: {
    owner: string;
    repo: string;
  }) {
    const { data } = await this.octokit.request(
      'GET /repos/{owner}/{repo}/languages',
      {
        owner,
        repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    return data;
  }

  async getRepositoriesByLanguage({ language }: { language: string }) {
    const searchParams: SearchParams = {
      q: `language:${language}`,
      sort: 'stars',
      order: 'desc',
      per_page: 10,
      page: 1,
    };

    const { data } = await this.octokit.request('GET /search/repositories', {
      ...searchParams,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        accept: 'application/vnd.github+json',
      },
    });

    return data;
  }
}
