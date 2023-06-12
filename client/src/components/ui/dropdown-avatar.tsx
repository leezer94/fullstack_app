'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { cn } from '@/lib';
import { useAuth } from '@/lib/hooks/auth';
import { SessionType } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { TypographyH4 } from './typography';

export function DropDownAvatar({
  className,
  avatarLink,
  session,
}: {
  className?: string;
  avatarLink?: string;
  session: SessionType;
}) {
  const { handleLogout: logout } = useAuth();
  const handleLogout = useCallback(() => logout(), [logout]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className={cn('w-[50px] h-[50px]', className)}>
          <AvatarImage
            src={avatarLink || 'https://i.stack.imgur.com/frlIf.png'}
            alt={`@${session.lastName}`}
          />
          <AvatarFallback>{session.lastName || 'annoymous'}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          @ {''}
          {session.lastName}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/mypage/${session.id}`}>
          <DropdownMenuItem>My Page</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Dialog>
          <DialogTrigger asChild>
            <Button className='h-4/6' variant='ghost' size='lg'>
              Sign out
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sign out</DialogTitle>
            </DialogHeader>
            <div className='flex flex-col'>
              <div className='mb-10 text-center'>
                <TypographyH4>Are you sure you want to sign out ?</TypographyH4>
              </div>
              <div className='flex justify-evenly'>
                <DialogTrigger asChild>
                  <Button>Cancel</Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button variant='destructive' onClick={handleLogout}>
                    Confirm
                  </Button>
                </DialogTrigger>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
