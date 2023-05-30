import { Selection } from '@/components/dashboard/cards/features';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';

export default function GithubTrends() {
  return (
    <Card className='w-full max-h-[300px]'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle>Popular on Github</CardTitle>
          <Selection
            placeholder='Language'
            items={['Javascript', 'Go', 'Java']}
            button={<Button variant='outline'>Search</Button>}
          />
        </div>
        <CardDescription>Popular repositories on Github</CardDescription>
      </CardHeader>
      <CardContent className='overflow-auto'>
        https://docs.github.com/en/rest/search?apiVersion=2022-11-28#about-search
      </CardContent>
      <CardFooter className='flex justify-end'></CardFooter>
    </Card>
  );
}
