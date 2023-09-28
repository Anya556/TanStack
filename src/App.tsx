import React from 'react';
import { useTodos } from './hooks/useTodos';
import { useQueryClient } from '@tanstack/react-query';

function App() {
  const { isLoading, data } = useTodos();
  const queryClient = useQueryClient();

  return (
    <div>
      <button onClick={() => queryClient.invalidateQueries(['todos'])}>
        Refresh
      </button>

      {isLoading ? (
        <div>Loading....</div>
      ) : data?.length ? (
        data.map((todo) => (
          <div key={todo.id}>
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
