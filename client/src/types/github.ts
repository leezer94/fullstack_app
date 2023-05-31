export interface SearchParams {
  q: string;
  sort: 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
  order: 'desc' | 'asc';
  per_page?: number;
  page?: number;
}
