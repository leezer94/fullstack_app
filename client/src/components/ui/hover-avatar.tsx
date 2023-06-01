'use client';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';

export function HoverAvatar({
  avatarLink,
  avatarFallback,
}: {
  avatarLink: string;
  avatarFallback: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className='hover:cursor-pointer'>
          <AvatarImage src={avatarLink} alt={`@${avatarFallback}`} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src='https://github.com/vercel.png' />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>@nextjs</h4>
            <p className='text-sm'>
              The React Framework – created and maintained by @vercel.
            </p>
            <div className='flex items-center pt-2'>
              <span className='text-xs text-muted-foreground'>
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
