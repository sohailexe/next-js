import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Posts() {
  try {
    const a = await fetch("https://procodrr.vercel.app/?sleep=2000");

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await res.json();
    return (
      <Suspense fallback={<div>.....................</div>}>
        <div>
          <h1>Posts</h1>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </Suspense>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
