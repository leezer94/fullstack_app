import { Button, Input } from '@/components/ui';

export default function FeedForm() {
  return (
    <div className='flex justify-between gap-5'>
      <Input />
      <Button variant='default' size='md'>
        Get Feeds
      </Button>
    </div>
  );
}
