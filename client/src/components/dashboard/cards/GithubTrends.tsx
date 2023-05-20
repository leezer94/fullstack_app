import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

export default function GithubTrends() {
  return (
    <Card className='w-full max-h-[300px]'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle>Popular on Github</CardTitle>
          <div className='flex gap-2'>
            <Select>
              <SelectTrigger className='w-[160px]'>
                <SelectValue placeholder='Language' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='javascript'>Javascript</SelectItem>
                <SelectItem value='go'>Go</SelectItem>
                <SelectItem value='java'>Java</SelectItem>
              </SelectContent>
            </Select>
            <Button variant='outline'>Search</Button>
          </div>
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
