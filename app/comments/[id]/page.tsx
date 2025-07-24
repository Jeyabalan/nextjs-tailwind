import BackButton from "@/app/pages/backButton";

export default async function CommentsDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/comments/${id}`);
  const { comment } = await res.json();

  return (
    <div>
      <BackButton pathName="comments" />
      <p className="text-3xl font-bold">Comments Details Page</p>
      <p className="mt-2">
        <span className="font-bold">Name: </span>
        {comment.name}
      </p>
      <p className="mt-2">
        <span className="font-bold">Email: </span>
        {comment.email}
      </p>
      <p className="mt-2">
        <span className="font-bold">Description: </span>
        {comment.body}
      </p>
    </div>
  );
}
