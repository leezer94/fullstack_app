import type { User } from '@/types';
import axios from 'axios';
import { cookies } from 'next/dist/client/components/headers';

export const getMe = async (token: string | undefined): Promise<User> => {
  const { data } = await axios.get('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return data;
};

export const getUserById = async (id: number): Promise<User> => {
  const token = cookies().get('authorization')?.value;

  return await fetch(`http://localhost:8000/users/${id}`, {
    cache: 'no-store',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  }).then((res) => res.json());
};
