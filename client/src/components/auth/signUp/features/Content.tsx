'use client';
import { useState, ChangeEvent } from 'react';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Button, DialogFooter, Input, Label } from '@/components/ui';
import { useAuth } from '../../../../lib/hooks/auth/useAuth';

export default function Content() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const { handleSignUp, signupError } = useAuth();

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
            value={email}
            placeholder='name@example.com'
            className='col-span-3'
            onChange={(e) => handleInput(e, setEmail)}
            required
          />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='password' className='text-right'>
            Password
          </Label>
          <Input
            type='password'
            id='password'
            value={password}
            placeholder='Enter Password'
            className='col-span-3'
            onChange={(e) => handleInput(e, setPassword)}
            required
          />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='confirm-password' className='text-right'>
            Confirm PW
          </Label>
          <Input
            type='password'
            id='confirm-password'
            placeholder='Confirm Password'
            className='col-span-3'
            required
          />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='firstName' className='text-right'>
            First Name
          </Label>
          <Input
            id='firstName'
            placeholder='First name'
            value={firstName}
            className='col-span-3'
            onChange={(e) => handleInput(e, setFirstName)}
            required
          />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='lastName' className='text-right'>
            Last Name
          </Label>
          <Input
            id='lastName'
            placeholder='Last name'
            value={lastName}
            className='col-span-3'
            onChange={(e) => handleInput(e, setLastName)}
            required
          />
        </div>
      </div>
      <DialogFooter>
        <DialogTrigger asChild>
          <Button
            type='submit'
            onClick={() =>
              handleSignUp({
                email,
                password,
                firstName,
                lastName,
              })
            }
          >
            Save changes
          </Button>
        </DialogTrigger>
      </DialogFooter>
    </>
  );
}
