// ✅ AdminPage.tsx
"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
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
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  // ✅ new
  const [postsList, setPostsList] = useState<Post[]>([]);

  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toISOString().slice(0, 10),
    description: "",
    imgUrl: "",
  });

  const [updateData, setUpdateData] = useState({
    postIndex: 0,
    title: "",
    entry: "",
    imgUrl: "", // <- new field
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteMode, setDeleteMode] = useState<"post" | "entry">("post");
  const [deleteData, setDeleteData] = useState({
    postIndex: 0,
    entryIndex: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleUpdateChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (showUpdateModal || showDeleteModal) {
      fetch("/api/posts")
        .then((res) => res.json())
        .then((data) => setPostsList(data));
    }
  }, [showUpdateModal, showDeleteModal]);

  async function addPost(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        imgUrl: formData.imgUrl.trim() === "" ? null : formData.imgUrl.trim(),
      }),
    });
    const result = await res.json();
    console.log(result);
    setShowModal(false);
  }

  async function updatePost(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      postIndex: Number(updateData.postIndex),
      logEntry: {
        title: updateData.title,
        datetime: new Date().toISOString(),
        entry: updateData.entry,
        imgUrl:
          updateData.imgUrl.trim() === "" ? null : updateData.imgUrl.trim(),
      },
    };

    const res = await fetch("/api/posts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log(result);
    setShowUpdateModal(false);
  }

  async function deletePost(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: deleteMode,
        postIndex: Number(deleteData.postIndex),
        entryIndex: Number(deleteData.entryIndex),
      }),
    });

    const result = await res.json();
    console.log(result);
    setShowDeleteModal(false);
  }

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <h1 className="text-center font-bold text-5xl py-10 text-green-400">
        Admin Panel
      </h1>

      <div className="flex justify-center items-center flex-wrap">
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 rounded-lg text-green-900 cursor-pointer hover:text-green-400 hover:bg-green-700 duration-150 transition bg-green-400 max-w-80 w-full py-32 text-4xl font-bold mx-3"
        >
          Add Post +
        </button>

        <button
          onClick={() => setShowUpdateModal(true)}
          className="mt-4 rounded-lg text-green-900 cursor-pointer hover:text-green-400 hover:bg-green-700 duration-150 transition bg-green-400 max-w-80 w-full py-32 text-4xl font-bold mx-3"
        >
          Update Post *
        </button>

        <button
          onClick={() => setShowDeleteModal(true)}
          className="mt-4 rounded-lg text-green-900 cursor-pointer hover:text-green-400 hover:bg-green-700 duration-150 transition bg-green-400 max-w-80 w-full py-32 text-4xl font-bold mx-3"
        >
          Delete Post -
        </button>
      </div>

      {/* Add Post Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-green-900 rounded-xl shadow-lg p-8 w-full max-w-lg relative">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Add New Post
            </h2>
            <form onSubmit={addPost} className="flex flex-col gap-4">
              <input
                name="title"
                placeholder="Title"
                className="border border-gray-300 rounded px-3 py-2"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <input
                name="date"
                type="date"
                className="border border-gray-300 rounded px-3 py-2"
                value={formData.date}
                disabled
              />
              <textarea
                name="description"
                placeholder="Description"
                className="border border-gray-300 rounded px-3 py-2"
                value={formData.description}
                onChange={handleChange}
                required
              />
              <input
                name="imgUrl"
                placeholder="Image URL"
                className="border border-gray-300 rounded px-3 py-2"
                value={formData.imgUrl}
                onChange={handleChange}
              />
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Post Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-green-900 rounded-xl shadow-lg p-8 w-full max-w-lg relative">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Add Log Entry
            </h2>
            <form onSubmit={updatePost} className="flex flex-col gap-4">
              <select
                name="postIndex"
                value={updateData.postIndex}
                onChange={handleUpdateChange}
                className="border border-gray-300 rounded px-3 py-2"
              >
                {postsList.map((post, index) => (
                  <option key={index} value={index}>
                    {post.title}
                  </option>
                ))}
              </select>
              <input
                name="imgUrl"
                placeholder="Entry Image URL (optional)"
                className="border border-gray-300 rounded px-3 py-2"
                value={updateData.imgUrl}
                onChange={handleUpdateChange}
              />
              <textarea
                name="entry"
                placeholder="Log Description"
                className="border border-gray-300 rounded px-3 py-2"
                value={updateData.entry}
                onChange={handleUpdateChange}
                required
              />
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowUpdateModal(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-green-900 rounded-xl shadow-lg p-8 w-full max-w-lg relative">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Delete</h2>

            <form onSubmit={deletePost} className="flex flex-col gap-4">
              {/* Choose between post or entry delete */}
              <div className="flex gap-4 text-green-200">
                <label>
                  <input
                    type="radio"
                    name="mode"
                    value="post"
                    checked={deleteMode === "post"}
                    onChange={() => setDeleteMode("post")}
                  />{" "}
                  Delete Post
                </label>
                <label>
                  <input
                    type="radio"
                    name="mode"
                    value="entry"
                    checked={deleteMode === "entry"}
                    onChange={() => setDeleteMode("entry")}
                  />{" "}
                  Delete Entry
                </label>
              </div>

              {/* Select post */}
              <select
                name="postIndex"
                value={deleteData.postIndex}
                onChange={(e) =>
                  setDeleteData({
                    ...deleteData,
                    postIndex: Number(e.target.value),
                  })
                }
                className="border border-gray-300 rounded px-3 py-2"
              >
                {postsList.map((post, index) => (
                  <option key={index} value={index}>
                    {post.title}
                  </option>
                ))}
              </select>

              {/* If deleting entry, show entry dropdown */}
              {deleteMode === "entry" &&
                postsList[deleteData.postIndex]?.entries?.length > 0 && (
                  <select
                    name="entryIndex"
                    value={deleteData.entryIndex}
                    onChange={(e) =>
                      setDeleteData({
                        ...deleteData,
                        entryIndex: Number(e.target.value),
                      })
                    }
                    className="border border-gray-300 rounded px-3 py-2"
                  >
                    {postsList[deleteData.postIndex]?.entries.map(
                      (entry: Entry, idx: number) => (
                        <option key={idx} value={idx}>
                          {entry.title}
                        </option>
                      )
                    )}
                  </select>
                )}

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
