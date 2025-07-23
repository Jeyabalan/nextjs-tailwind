import CommentsList from "./commentsList";

export default async function CommentsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();

  return <CommentsList comments={comments} />;
}
