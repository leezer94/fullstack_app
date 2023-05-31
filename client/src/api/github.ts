import { Octokit } from 'octokit';
import { SearchParams } from '@/types';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN,
});

export const getOwnersLanguageUses = async () => {
  const data = await octokit.request('GET /repos/{owner}/{repo}/languages', {
    owner: 'leezer94',
    repo: 'keonhee-blog',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return data;
};
export const getRepositoriesByLanguage = async ({
  language = 'TypeScript',
}: {
  language: string;
}) => {
  const searchParams: SearchParams = {
    q: `language:${language}`,
    sort: 'stars',
    order: 'desc',
    per_page: 10,
    page: 1,
  };

  const data = await octokit.request('GET /search/repositories', {
    ...searchParams,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      accept: 'application/vnd.github+json',
    },
  });

  console.log('git data', data);

  return data;
};
