import React from 'react';
import { useQuery } from '@tanstack/react-query';

const todoId = 1;

function App() {
  const { isLoading, error, data } = useQuery(
    ['todos', todoId],
    () =>
      fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
        response.json()
      )
  );
  return <div>{data ? <h1>Todo: {data.title}</h1> : <h1>Data not found!</h1>}</div>;
}

export default App;
