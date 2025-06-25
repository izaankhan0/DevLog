"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Post() {
  type Entry = {
  title: string;
  datetime: string;
  entry: string;
  imgUrl?: string | null;
};

type Post = {
  title: string;
  date: string;
  description: string;
  imgUrl?: string | null;
  entries: Entry[];
};

  const [post, setPost] = useState<Post | null>(null);

  const params = useParams(); // Get [id] from URL
  const id = Number(params.id); // Convert string to number

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        const found = data[id - 1]; // Assuming ID starts from 1
        setPost(found);
      });
  }, [id]);

  if (!post)
    return <p className="text-center py-10 text-gray-400">Loading...</p>;
  function formatAMPM(datetime: string) {
    const date = new Date(datetime);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div style={{ fontFamily: "Poppins" }} className="p-5 sm:p-10">
      <div className="mb-2">
        <button
          onClick={() => (window.location.href = "/posts")}
          className="text-green-500 bg-black px-10 py-4 rounded-md hover:text-black cursor-pointer hover:bg-green-400 transition duration-200"
        >
          ← Back to Posts
        </button>
      </div>
      {/* MAIN POST CONTENT */}
      <div className="flex flex-col sm:flex-row pt-10 pb-5 gap-6">
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-bold text-green-400">
            {post.title}
          </h1>
          <p className="text-lg my-1 text-gray-400">{post.date}</p>
          <p className="text-green-300 mt-2 text-sm sm:text-md">
            {post.description}
          </p>
        </div>
        {post.imgUrl && (
          <img className="h-60 rounded-md" src={post.imgUrl} alt="post" />
        )}
      </div>

      <hr className="my-10 border-green-700" />

      {/* LOG ENTRIES */}
      {post.entries?.map((entry: Entry, idx: number) => (
        <div key={idx} className="flex flex-col sm:flex-row gap-5 mb-10">
          <div className="flex-1">
            <p className="text-xl sm:text-2xl font-bold text-green-400">
              {entry.title}
            </p>
            <p className="text-md text-gray-400 my-1">
              {formatAMPM(entry.datetime)}
            </p>
            <p className="text-green-300 mt-2">{entry.entry}</p>
          </div>

          {entry.imgUrl && (
            <img
              className="rounded-md max-h-40"
              src={entry.imgUrl}
              alt="entry-img"
            />
          )}
        </div>
      ))}
    </div>
  );
}
