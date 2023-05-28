'use client';

import { ReactNode, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  TypographyH4,
  Button,
} from '@/components/ui';
import { SignupForm } from './features';

export default function SignUpModal({ button }: { button: ReactNode }) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isSubmitted ? 'Succeed to create an account' : 'Create an account'}
          </DialogTitle>
          <DialogDescription>
            {isSubmitted
              ? 'Your profile information can still be edited on My page'
              : 'Complete your profile here to create a new account with us.'}
          </DialogDescription>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
}
