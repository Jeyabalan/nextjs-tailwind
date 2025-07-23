"use client";

import { useRouter } from "next/navigation";

export default function PostsListPage({ posts }: { posts: [] }) {
  const router = useRouter();
  const onClickPost = (postId: string) => {
    router.push(`/posts/${postId}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Posts</h1>
      {posts.map((post: { id: string; title: string }) => (
        <p
          className="cursor-pointer"
          key={post.id}
          onClick={() => onClickPost(post.id)}
        >
          {post.id}: {post.title}
        </p>
      ))}
    </div>
  );
}
