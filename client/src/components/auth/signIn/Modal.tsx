import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
} from '@/components/ui';
import { SigninForm } from './features';

export default function SignInModal({ button }: { button: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>Sign In With Your Account</DialogDescription>
        </DialogHeader>
        <SigninForm />
      </DialogContent>
      {/* <DialogFooter>
        <DialogTrigger asChild>
          <Button
            type='submit'
            // onClick={() => handleSignIn({ email, password })}
          >
            Sign In
          </Button>
        </DialogTrigger>
      </DialogFooter> */}
    </Dialog>
  );
}
