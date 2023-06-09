import type { AuthType, UserInformationType } from '@/types';
import axios from 'axios';
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

export const getSession = async (): Promise<Partial<UserInformationType>> => {
  const token = localStorage.getItem('access_token');
  const { data } = await axios.get('http://localhost:8000/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const postLogout = async (): Promise<() => void> => {
  return await axiosClient.post('/auth/logout', {}, { withCredentials: true });
};
