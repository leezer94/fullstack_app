'use client';

import { useCallback } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { useAuth } from '@/lib/hooks/auth';
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
  avatarLink,
  userName,
}: {
  avatarLink: string;
  userName: string;
}) {
  const { handleLogout: logout } = useAuth();
  const handleLogout = useCallback(() => logout(), [logout]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='w-[50px] h-[50px]'>
          <AvatarImage src={avatarLink} alt={`@${userName}`} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          @ {''}
          {userName}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <Dialog>
          <DialogTrigger className='flex justify-center' asChild>
            <Button className='h-4/6' variant='outline' size='lg'>
              Sign Out
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
