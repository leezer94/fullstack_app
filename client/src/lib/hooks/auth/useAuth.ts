import type { AuthType, UserInformationType } from '@/types';
import { useRouter } from 'next/navigation';
import { postLogin, postSignUp } from '@/api';
import { useCustomMutation } from '@/lib/hooks/query';
import { useToast } from '../toast';

export const useAuth = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate: handleSignIn, error: signinError } = useCustomMutation(
    postLogin,
    {
      onSuccess: ({
        access_token,
      }: Pick<AuthType, 'access_token' | 'refresh_token'>) => {
        localStorage.setItem('access_token', access_token);
        router.push('/');
      },
      onSettled: () => toast({ title: '로그인에 성공 하셨습니다.' }),
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

  return { handleSignIn, signinError, handleSignUp, signupError };
};
