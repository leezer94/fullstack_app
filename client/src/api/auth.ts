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
  const { access_token } = data;

  console.log(data);

  localStorage.setItem('access_token', access_token);

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

  console.log(data);

  return data;
};
