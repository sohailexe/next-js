"use client";
import { useEffect } from "react";
import React from "react";

const Old = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "http://localhost:8080/posts" // Adjust the URL as needed
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  if (!posts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Old;
