import type { AuthType, UserInformationType } from '@/types';
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
      onSuccess: ({
        access_token,
      }: Pick<AuthType, 'access_token' | 'refresh_token'>) => {
        localStorage.setItem('access_token', access_token);
        router.push('/');
      },
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
        localStorage.removeItem('access_token');
        toast({
          title: 'Succeed to Sign out',
          description: 'We hope to see you again!',
        });
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
