import type { AuthType, UserInformationType } from '@/types';
import axiosClient from './axiosInstance';

type SignInType = Pick<AuthType, 'email' | 'password'>;
type SignUpType = SignInType & {
  firstName: string;
  lastName: string;
};

export const postLogin = async ({
  email,
  password,
}: SignInType): Promise<Pick<AuthType, 'access_token' | 'refresh_token'>> => {
  const { data } = await axiosClient.post('/auth/signin', { email, password });

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

export const getSession = async () => {
  const { data } = await axiosClient.get('/users/me');

  return data;
};
