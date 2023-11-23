import React from 'react';
import MainRoutes from './routes';

import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

function App() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery("todos", () =>
    axios.get("http://localhost:8080").then((response) => response.data)
  );

  const mutation = useMutation({
    mutationFn: ({ todoId, completed }) => {
      return axios
        .patch(`http://localhost:8080${todoId}`, {
          completed,
        })
        .then((response) => response.data);
    },
    onSuccess: (data) => {
      queryClient.setQueryData("todos", (currentData) =>
        currentData.map((todo) => (todo.id === data.id ? data : todo))
      );
    },
    onError: (error) => {
      console.error(error);
    },
  });

  if (isLoading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="loading">Algo deu errado!</div>;
  }

  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
