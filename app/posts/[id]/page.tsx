import BackButton from "@/app/pages/backButton";

export default async function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const detail = await res.json();

  return (
    <div>
      <BackButton pathName={`posts`} />
      <p className="mt-5 mb-5">
        <span className="font-bold">Title:</span> {detail.title}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {detail.body}
      </p>
    </div>
  );
}
