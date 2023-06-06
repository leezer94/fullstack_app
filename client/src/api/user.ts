import type { User } from '@/types';
import axiosClient from './axiosInstance';

export const getMe = async (): Promise<User> => {
  const { data } = await axiosClient.get('/users/me', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiMmt1bmhlZTk0QGdtYWlsLmNvbSIsImlhdCI6MTY4NjAzNTA3MiwiZXhwIjoxNjg2MDM1OTcyfQ.aECnvlT_vOi571grMw_RcaREPRNm2NVdfJJHsqpAI78`,
    },
    withCredentials: true,
  });

  return data;
};
