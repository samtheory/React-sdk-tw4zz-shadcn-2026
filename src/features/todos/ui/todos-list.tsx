import type { ApiError } from "@/lib/http-client/api-error";
import { useTodosQuery } from "../model/todos.queries";


export function TodosList() {
  const { data, isLoading, isError, error } = useTodosQuery();

  if (isLoading) {
    return <p>Loading todos...</p>;
  }

  if (isError) {
    const apiError = error as ApiError; // because our client throws ApiError
    return (
      <div className="text-red-600">
        Failed to load todos: {apiError.message}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <p>No todos yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {data.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2">
          <span>{todo.title}</span>
          {todo.completed && (
            <span className="text-xs text-green-600">(done)</span>
          )}
        </li>
      ))}
    </ul>
  );
}
