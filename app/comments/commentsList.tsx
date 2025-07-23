"use client";

import { useRouter } from "next/navigation";

export default function CommentsList({
  comments,
}: {
  comments: [{ name: string; id: string }];
}) {
  const router = useRouter();
  const onClickComment = (id: string) => {
    router.push(`/comments/${id}`);
  };

  return (
    <div>
      <p className="mb-1.5 font-bold text-3xl">Comments List</p>
      {comments.map(({ id, name }: { id: string; name: string }) => (
        <p
          className="cursor-pointer"
          key={id}
          onClick={() => onClickComment(id)}
        >
          {id}: {name}
        </p>
      ))}
    </div>
  );
}
