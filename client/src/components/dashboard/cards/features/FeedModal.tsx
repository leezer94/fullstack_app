'use client';
import { ReactNode } from 'react';
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
import { sanitizeDescription } from '@/lib';
import { Feed } from '@/types';

buttonVariants;

type ModalProps = {
  type: 'FeArticles' | 'Gossip';
  button: ReactNode;
  feed: Feed;
};

export default function FeedModal({
  type,
  button,
  feed: { title, description, link, pubDate },
}: ModalProps) {
  const decodedDescription = new DOMParser().parseFromString(
    description,
    'text/html'
  ).body.textContent as string;

  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className='p-10 min-w-[800px]'>
        <DialogHeader className='mb-10'>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <TypographyP>
          {type === 'Gossip'
            ? description
            : sanitizeDescription(decodedDescription)}
        </TypographyP>
        <DialogFooter className='mt-10'>
          <div className='flex flex-row justify-between items-center w-full'>
            <TypographyMuted>{pubDate}</TypographyMuted>
            <Link href={link} className={buttonVariants({ size: 'sm' })}>
              <LinkIcon className='mr-2 h-4 w-4' />
              Link to Feed
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
