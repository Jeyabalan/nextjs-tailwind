import CommentsList from "./commentsList";

export default async function CommentsPage() {
  const res = await fetch("http://localhost:3000/api/comments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { comments } = await res.json();

  return <CommentsList comments={comments} />;
}
