import { ReactNode } from 'react';
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
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a account</DialogTitle>
          <DialogDescription>
            Complete your profile here to create a new account with us.
          </DialogDescription>
        </DialogHeader>
        <Content />
      </DialogContent>
    </Dialog>
  );
}
