"use client";

import { useEffect, useState } from "react";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div className="flex gap-3 border">
      {posts.map((post, index) => {
        return (
          <div className="border h-96 w-96 bg-slate-300" key={post.id}>
            {post.title}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
