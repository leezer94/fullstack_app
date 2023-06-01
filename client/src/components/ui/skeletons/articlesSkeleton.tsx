import { Skeleton } from '@/components/ui/skeleton';

export default function ArticlesSkeleton() {
  return (
    <div className='flex flex-col gap-y-10 pl-5'>
      <Skeleton className='h-8 w-4/6 ' />
      <Skeleton className='h-8 w-4/6 ' />
      <Skeleton className='h-8 w-4/6 ' />
      <Skeleton className='h-8 w-4/6 ' />
    </div>
  );
}
