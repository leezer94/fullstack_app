'use client';

import type { AuthType } from '@/types';
import { useState, ChangeEvent } from 'react';
import { Label } from '@radix-ui/react-label';
import { useRouter } from 'next/navigation';
import { postLogin } from '@/api';
import { Button, DialogFooter, DialogTrigger, Input } from '@/components/ui';
import { useCustomMutation } from '@/lib/hooks/query';
import { useToast } from '@/lib/hooks/toast';

export default function Content() {
  const router = useRouter();
  const { toast } = useToast();
  const { mutate: handleSignIn } = useCustomMutation(postLogin, {
    onSuccess: ({
      access_token,
    }: Pick<AuthType, 'access_token' | 'refresh_token'>) => {
      localStorage.setItem('access_token', access_token);
      router.push('/');
      toast({ title: '성공' });
    },
  });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>, callback: Function) =>
    callback(e.target.value);

  return (
    <>
      <div className='grid gap-4 py-4'>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='email' className='text-right'>
            Email
          </Label>
          <Input
            id='email'
            placeholder='name@example.com'
            className='col-span-3'
            value={email}
            onChange={(e) => handleInput(e, setEmail)}
          />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='password' className='text-right'>
            Password
          </Label>
          <Input
            type='password'
            id='password'
            placeholder='Enter Password'
            className='col-span-3'
            value={password}
            onChange={(e) => handleInput(e, setPassword)}
          />
        </div>
      </div>
      <DialogFooter>
        <DialogTrigger asChild>
          <Button
            type='submit'
            onClick={() => handleSignIn({ email, password })}
          >
            Sign In
          </Button>
        </DialogTrigger>
      </DialogFooter>
    </>
  );
}
