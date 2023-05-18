'use client';

import { GithubIcon, Mail } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SignInModal, SignUpModal } from '@/components/auth';
import { Button, TypographyH2, TypographyMuted } from '@/components/ui';

import AuthenticationImage from '../../../../public/Athentication.avif';

export default function Page() {
  const router = useRouter();

  return (
    <div className='flex h-screen max-h-screen'>
      <div className='w-full h-full '>
        <Image
          className='max-h-screen'
          src={AuthenticationImage}
          alt='authentication'
        />
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='absolute top-4 px-5 w-2/4'>
          <div className='flex justify-between'>
            <Button variant='ghost' size='sm' onClick={() => router.back()}>
              Home
            </Button>
          </div>
        </div>
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
                  <Mail className='mr-2 h-4 w-4' />
                  Sign In With E-mail
                </Button>
              }
            />
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
