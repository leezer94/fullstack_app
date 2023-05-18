'use client';

import { GithubIcon } from 'lucide-react';
import Image from 'next/image';
import { Button, Input, TypographyH2 } from '@/components/ui';

import AuthenticationImage from '../../../../public/Athentication.avif';
import { TypographyMuted } from '../../../components/ui/typography';

export default function Page() {
  return (
    <div className='flex h-screen max-h-screen'>
      <div className='w-full h-full'>
        <Image src={AuthenticationImage} alt='authentication' />
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='absolute right-2 top-1'>
          <Button variant='ghost' size='lg'>
            Login
          </Button>
        </div>
        <div className='flex flex-col justify-center w-3/6'>
          <div className='flex flex-col items-center mb-10'>
            <TypographyH2>Create an account</TypographyH2>
            <TypographyMuted>
              Enter your email below to create your account
            </TypographyMuted>
          </div>
          <form className='flex h-2/5	flex-col justify-around'>
            <Input
              className='mb-5'
              type='email'
              placeholder='name@example.com'
            />
            <Button type='submit'>Sing In With Email</Button>
          </form>
          <div className='flex items-center mt-10 mb-10'>
            <hr className='flex-grow border-t border-gray-300 ' />
            <TypographyMuted>OR CONTINUE WITH</TypographyMuted>
            <hr className='flex-grow border-t border-gray-300' />
          </div>
          <div className='flex flex-col items-center -space-y-0.5'>
            <Button variant='outline' size='lg'>
              <GithubIcon className='mr-2 h-4 w-4' />
              Sign In With Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
