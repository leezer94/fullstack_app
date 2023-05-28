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
