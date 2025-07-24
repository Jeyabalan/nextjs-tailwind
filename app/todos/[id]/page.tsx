import BackButton from "@/app/pages/backButton";

export default async function TodoDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error(`Failed to fetch todos: ${res.status}`);

  const { todo } = await res.json();

  return (
    <div className="m-5">
      <BackButton pathName={`todos`} />
      <p className="mt-5 font-bold text-2xl">Todo Details</p>
      <p className="mt-5">
        <span className="font-bold">Title: </span>
        {todo.title}
      </p>
      <p className="mt-5">
        <span className="font-bold">Status: </span>
        <span
          className={`font-bold ${
            todo.completed ? "text-green-800" : "text-red-800"
          }`}
        >
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </p>
    </div>
  );
}
