import type { User } from '@/types';
import axiosClient from './axiosInstance';

export const getMe = async (): Promise<User> => {
  const { data } = await axiosClient.get('/users/me');

  console.log('data', data);

  return data;
};
