import React from 'react';
import { useQuery } from '@tanstack/react-query';
import todoService from './services/todo.service';

function App() {
  const { isLoading, data } = useQuery(['todos'], () => todoService.getAll(), {
    select: ({ data }) => data,
    onSuccess(data) {
      alert(data[3].title)
    },
    onError(err) {
      alert(err)
    }
  });
  return (
    <div>
      {isLoading ? (
        <div>Loading....</div>
      ) : data?.length ? (
        data.map((todo) => (
          <div>
            <b>{todo.id}:</b> {todo.title}
          </div>
        ))
      ) : (
        <h1>Data not found!</h1>
      )}
    </div>
  );
}

export { App };
