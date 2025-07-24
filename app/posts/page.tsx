import PostsListPage from "./postsList";

export default async function getPostsPage() {
  const res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }
  const { posts } = await res.json();

  return <PostsListPage posts={posts.posts} />;
}
