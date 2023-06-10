import type { AuthType, User, UserInformationType } from '@/types';
import { cookies } from 'next/dist/client/components/headers';
import axiosClient from './axiosInstance';

type SignInType = Pick<AuthType, 'email' | 'password'>;
type SignUpType = SignInType & {
  firstName: string;
  lastName: string;
};

export const postSignin = async ({
  email,
  password,
}: SignInType): Promise<Pick<AuthType, 'access_token' | 'refresh_token'>> => {
  const { data } = await axiosClient.post('/auth/signin', {
    email,
    password,
  });

  return data;
};

export const postSignUp = async ({
  email,
  password,
  firstName,
  lastName,
}: SignUpType): Promise<Partial<UserInformationType>> => {
  const { data } = await axiosClient.post('/auth/signup', {
    email,
    password,
    firstName,
    lastName,
  });

  return data;
};

export const postLogout = async (): Promise<() => void> => {
  return await axiosClient.post('/auth/logout');
};

export const refreshToken = async (): Promise<
  Pick<AuthType, 'access_token' | 'refresh_token'>
> => {
  return await axiosClient.post(
    '/auth/refresh',
    {},
    {
      headers: {
        Authorization:
          'Bearer "$argon2id$v=19$m=65536,t=3,p=4$7gxNZUivFMur292yAog3Og$bftWCtHKw+OQc/TSzx6+Kxnxxwk9aMIz4Rg3G5BD6gs"',
      },
    }
  );
};

export const getSession = async (): Promise<User> => {
  const token = cookies().get('authorization')?.value;

  return await fetch('http://localhost:8000/users/me', {
    cache: 'no-store',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  }).then((res) => res.json());
};
