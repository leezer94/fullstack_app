'use client';
import { GithubIcon, Mail } from 'lucide-react';
import Image from 'next/image';
import { SignInModal, SignUpModal } from '@/components/auth';
import { Button, TypographyH2, TypographyMuted } from '@/components/ui';

import AuthenticationImage from '../../../../public/authentication.avif';

export default function Page() {
  return (
    <div className='flex h-screen max-h-screen min-w-[200px]'>
      <div className='hidden w-full h-full lg:block'>
        <Image
          priority
          className='max-h-screen'
          src={AuthenticationImage}
          alt='authentication'
        />
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='flex flex-col justify-center w-3/6'>
          <div className='flex flex-col items-center mb-10'>
            <TypographyH2>Create an account</TypographyH2>
            <TypographyMuted>
              Enter your email below to create your account
            </TypographyMuted>
          </div>
          <form className='flex	flex-col justify-around'>
            <SignUpModal
              button={<Button type='button'>Sign Up With E-mail</Button>}
            />
          </form>
          <div className='flex items-center mt-10 mb-10'>
            <hr className='flex-grow border-t border-gray-300 ' />
            <TypographyMuted>OR CONTINUE WITH</TypographyMuted>
            <hr className='flex-grow border-t border-gray-300' />
          </div>
          <div className='flex flex-col items-center -space-y-0.5'>
            <SignInModal
              button={
                <Button className='mb-5' type='button' size='lg'>
                  <Mail className='hidden mr-2 h-4 w-4 md:flex' />
                  Sign In With E-mail
                </Button>
              }
            />
            <Button variant='outline' size='lg'>
              <GithubIcon className='hidden mr-2 h-4 w-4 md:flex' />
              Sign In With Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
