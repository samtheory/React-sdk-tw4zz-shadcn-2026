import { http } from "@/lib/http-client/http";


export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface CreateTodoInput {
  title: string;
}

export async function fetchTodos(): Promise<Todo[]> {
  return http.get<Todo[]>("/todos");
}

export async function createTodo(input: CreateTodoInput): Promise<Todo> {
  return http.post<Todo>("/todos", input);
}
