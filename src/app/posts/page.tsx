"use client";

import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Search } from "lucide-react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <h1 className="text-4xl font-bold pt-7 text-center text-green-400">All Posts</h1>

      <div className="my-8 h-10 flex items-center">
        <Search className="h-5 absolute ml-2 text-[#00330a]" />
        <input
          type="text"
          className="border-2 outline-hidden hover:border-black transition duration-200 bg-green-700 rounded-md text-[#00330a] text-sm h-full w-full pl-10 px-5"
          placeholder="Search posts"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            id={index + 1}
            title={post.title}
            date={post.date}
            description={post.description}
            imgSrc={post.imgUrl} // 👈 use imgUrl here, not imgSrc
          />
        ))}
      </div>
    </div>
  );
}
