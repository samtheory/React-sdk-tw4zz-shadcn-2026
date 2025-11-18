import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, createTodo, CreateTodoInput, Todo } from "../api/todos.api";

const TODOS_QUERY_KEY = ["todos"];

export function useTodosQuery() {
  return useQuery({
    queryKey: TODOS_QUERY_KEY,
    queryFn: fetchTodos,
  });
}

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateTodoInput) => createTodo(input),
    onSuccess: (newTodo: Todo) => {
      // Optimistically update cache
      queryClient.setQueryData<Todo[]>(TODOS_QUERY_KEY, (old) =>
        old ? [...old, newTodo] : [newTodo]
      );
    },
  });
}
