'use client';

import { useCallback } from 'react';
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
        <DropdownMenuItem onClick={handleLogout}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
