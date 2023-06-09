import type { User } from '@/types';
import axios from 'axios';

export const getMe = async (token: string | undefined): Promise<User> => {
  const { data } = await axios.get('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return data;
};
