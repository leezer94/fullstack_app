'use client';
import { ReactNode, Suspense } from 'react';
import { Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  TypographyMuted,
  DialogFooter,
  TypographyP,
  buttonVariants,
} from '@/components/ui';
import { ArticlesSkeleton } from '@/components/ui/skeletons';
import { sanitizeDescription } from '@/lib';
import { useParsedFeed } from '@/lib/hooks/feed';
import { Feed, PathType } from '@/types';

type ModalProps = {
  type: PathType;
  button: ReactNode;
  feed: Feed;
};

export default function FeedModal({
  type,
  button,
  feed: { title, description, link, pubDate },
}: ModalProps) {
  const { parsedFeed } = useParsedFeed(description);

  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className='p-10 min-w-[800px]'>
        <DialogHeader className='mb-10'>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Suspense fallback={<ArticlesSkeleton />}>
          <div className='overflow-hidden'>
            <TypographyP className='max-h-[300px] overflow-auto'>
              {type === 'bbc-football'
                ? description
                : type === 'korean-fe'
                ? sanitizeDescription(parsedFeed)
                : parsedFeed}
            </TypographyP>
          </div>
        </Suspense>

        <DialogFooter className='mt-10'>
          <div className='flex flex-row justify-between items-center w-full'>
            <TypographyMuted>{pubDate}</TypographyMuted>
            <Link
              target='_blank'
              href={link}
              className={buttonVariants({ size: 'sm' })}
            >
              <LinkIcon className='mr-2 h-4 w-4' />
              Link to Feed
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
