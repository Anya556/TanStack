import React from 'react';
import { useTodos } from './hooks/useTodos';

function App() {
  const { isLoading, data } = useTodos();
  
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
