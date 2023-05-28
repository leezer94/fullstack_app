'use client';

import { ReactNode, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
} from '@/components/ui';
import { Content } from './features';

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
        <Content isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      </DialogContent>
    </Dialog>
  );
}
