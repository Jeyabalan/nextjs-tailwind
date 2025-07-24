"use client";

import { useRouter } from "next/navigation";

export default function TodosListPage({ todos }: { todos: [] }) {
  const router = useRouter();

  const navigateToDetailPage = (id: string) => {
    router.push(`/todos/${id}`);
  };

  return (
    <div>
      <p className="font-bold text-3xl">Todos List</p>
      <div className="mt-3">
        {todos.map((todo: { id: string; title: string }) => (
          <p
            className="cursor-pointer"
            onClick={() => navigateToDetailPage(todo.id)}
            key={todo.id}
          >
            {todo.id}. {todo.title}
          </p>
        ))}
      </div>
    </div>
  );
}
