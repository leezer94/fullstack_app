import type { Todo } from '@/types';
import axiosClient from './axiosInstance';

export const getAllTodos = async (): Promise<Todo[]> => {
  const { data } = await axiosClient.get('/todos');

  return data;
};
