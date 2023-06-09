import type { UserInformationType } from '@/types';
import { useRouter } from 'next/navigation';
import { postLogout, postSignin, postSignUp } from '@/api';
import { useCustomMutation } from '@/lib/hooks/query';
import { useToast } from '../toast';

export const useAuth = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate: handleSignIn, error: signinError } = useCustomMutation(
    postSignin,
    {
      onSuccess: () => router.push('/'),
      onSettled: () => toast({ title: 'Succeed to Sign In' }),
    }
  );

  const { mutate: handleSignUp, error: signupError } = useCustomMutation(
    postSignUp,
    {
      onSuccess: ({ firstName }: Pick<UserInformationType, 'firstName'>) => {
        toast({ title: `Hello, ${firstName} welcome to Okto` });
      },
    }
  );

  const { mutate: handleLogout, error: logoutError } = useCustomMutation(
    postLogout,
    {
      onSuccess: () => {
        toast({
          title: 'Succeed to Sign out',
          description: 'We hope to see you again!',
        });

        router.refresh();
      },
    }
  );
  return {
    handleSignIn,
    signinError,
    handleSignUp,
    signupError,
    handleLogout,
    logoutError,
  };
};
