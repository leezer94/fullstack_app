import { Card } from '@/components/ui';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Bookmarks() {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Bookmarks</CardTitle>
        <CardDescription>Todos you have bookmarked</CardDescription>
      </CardHeader>
      <CardContent className='overflow-auto'>
        <CardTitle>https://kofearticle.substack.com/feed</CardTitle>
      </CardContent>
    </Card>
  );
}
