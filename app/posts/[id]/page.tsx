import BackButton from "@/app/pages/backButton";

export default async function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const { post } = await res.json();

  return (
    <div>
      <BackButton pathName={`posts`} />
      <p className="mt-5 mb-5">
        <span className="font-bold">Title:</span> {post.title}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {post.body}
      </p>
    </div>
  );
}
