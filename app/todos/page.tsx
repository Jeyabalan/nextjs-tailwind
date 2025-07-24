import TodosListPage from "./todosList";

export default async function TodosPage() {
  const res = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch todos: ${res.status}`);
  }
  const { todos } = await res.json();

  return <TodosListPage todos={todos} />;
}
