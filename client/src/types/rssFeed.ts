export interface Feed {
  title: string;
  description: string;
  link: string;
  guid?: object;
  pubDate: string;
  enclosure?: object;
  'content:encoded'?: string;
  'dc:creator'?: string;
}

export interface RssFeedType {
  title: string;
  description: string;
  item: Feed[];
}

export type PathType =
  | 'korean-fe'
  | 'bbc-football'
  | 'css-tricks'
  | 'dev-to'
  | 'tkdodo';
