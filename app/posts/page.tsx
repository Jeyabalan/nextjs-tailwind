import PostsListPage from "./postsList";

export default async function getPostsPage() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const res = await fetch("https://dummyjson.com/posts");
  const { posts } = await res.json();
  return <PostsListPage posts={posts} />;
}
