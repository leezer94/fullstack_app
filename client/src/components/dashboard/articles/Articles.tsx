import type { PathType } from '@/types';
import { Selection } from '@/components/dashboard/features';
import { Button, Card, CardDescription, CardHeader } from '@/components/ui';

export type FeedsType = { title: string; path: Partial<PathType> };

const FEEDS: FeedsType[] = [
  { title: 'FE Articles', path: 'korean-fe' },
  { title: 'BBC Football', path: 'bbc-football' },
  { title: "TkDodo's blog", path: 'tkdodo' },
  {
    title: 'CSS-Tricks',
    path: 'css-tricks',
  },
  {
    title: 'Dev-To',
    path: 'dev-to',
  },
];

export default async function Articles() {
  // const [football, css, dev, fe, tkdodo] = await Promise.all([
  //   getRssFeeds('bbc-football'),
  //   getRssFeeds('css-tricks'),
  //   getRssFeeds('dev-to'),
  //   getRssFeeds('korean-fe'),
  //   getRssFeeds('tkdodo'),
  // ]);
  // const currentCategory = useContext(CategoryContext);
  // const currentPath: FeedsType['path'] =
  //   FEEDS.find(({ title }) => title === currentCategory)?.path || 'korean-fe';

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between'>
          {/* <CardTitle>{football.title}</CardTitle> */}
          <div className='flex justify-center gap-5'>
            <Selection
              placeholder='FE-Articles'
              items={FEEDS}
              button={<Button variant='outline'>Get Feeds</Button>}
            />
          </div>
        </div>
        <CardDescription>Articles from</CardDescription>
      </CardHeader>
      {/* <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant='outline' className='mb-5 w-full'>
            <ArrowBigDownDashIcon />
            {currentCategory}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent> */}
      {/* </CollapsibleContent> */}
      {/* </Collapsible> */}
    </Card>
  );
}
