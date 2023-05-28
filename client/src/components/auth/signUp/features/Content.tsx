'use client';
import { Dispatch, SetStateAction } from 'react';
import { SignupForm } from '@/components/auth/signUp/features';
import { Button, DialogTrigger, TypographyH4 } from '@/components/ui';

export default function Content({
  isSubmitted,
  setIsSubmitted,
}: {
  isSubmitted: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className='grid gap-4 py-4'>
      {isSubmitted ? (
        <div className='flex flex-col items-center gap-10'>
          <div className='flex '>
            <TypographyH4>Please Sign in with your account</TypographyH4>
          </div>
          <DialogTrigger>
            <Button>Confirm</Button>
          </DialogTrigger>
        </div>
      ) : (
        <SignupForm setIsSubmitted={setIsSubmitted} />
      )}
    </div>
  );
}
