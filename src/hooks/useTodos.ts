import { useQuery } from '@tanstack/react-query';
import todoService from '../services/todo.service';
import { AxiosResponse } from 'axios';

const data: AxiosResponse<ITodo[], any> = {
  data: [
    {
      id: 1,
      completed: false,
      title: 'hello',
      userId: 1,
    },
  ],
};

export const useTodos = () => {
  return useQuery(['todos'], () => todoService.getAll(), {
    select: ({ data }) => data,
    initialData() {
      return data;
    },
  });
};
