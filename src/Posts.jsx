import { usePost } from "./PostContext";
import { useState } from "react";

export const posts = [
  {
    id: 1,
    title: "Exploring the Future of Artificial Intelligence",
    description: "AI has the potential to revolutionize every industry, from healthcare to finance. In this post, we dive deep into how AI is reshaping the future and what we can expect in the next decade.",
    author: "John Doe"
  },
  {
    id: 2,
    title: "The Power of Web Development: Building the Next Generation of Internet Applications",
    description: "Web development has come a long way. With the advent of frameworks like React and Vue.js, developers are now building more dynamic and interactive web apps than ever before.",
    author: "Jane Doe"
  },
  {
    id: 3,
    title: "Data Science in 2025: The Future of Big Data",
    description: "As businesses collect more data than ever before, data science plays a critical role in uncovering valuable insights. In this post, we explore the future of data science and how it's transforming industries.",
    author: "Alice Smith"
  },
  {
    id: 4,
    title: "Sustainable Energy Solutions: A Path Towards a Greener Future",
    description: "The world is facing an energy crisis, but renewable sources like solar and wind energy offer a promising solution. This post looks at the most efficient sustainable energy solutions and their potential impact on our future.",
    author: "Emily Johnson"
  },
  {
    id: 5,
    title: "The Role of Blockchain Technology in Shaping Future Economies",
    description: "Blockchain is more than just cryptocurrency. This technology is transforming everything from supply chains to voting systems. Here, we explore how blockchain will impact future economies and industries.",
    author: "David Lee"
  }
];




const Posts = () => {
  const { posts, deletePost, editPost } = usePost();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "", author: "" });

  const startEdit = (post) => {
    setEditingId(post.id);
    setEditForm({ title: post.title, description: post.description, author: post.author });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editPost({ ...editForm, id: editingId });
    setEditingId(null);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((p) => (
        <div key={p.id} className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow hover:shadow-xl transition-shadow p-6 flex flex-col gap-3">
          {editingId === p.id ? (
            <form onSubmit={handleEditSubmit} className="space-y-2">
              <input
                type="text"
                name="title"
                value={editForm.title}
                onChange={handleEditChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <textarea
                name="description"
                value={editForm.description}
                onChange={handleEditChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="text"
                name="author"
                value={editForm.author}
                onChange={handleEditChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <div className="flex gap-2">
                <button type="submit" className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Save</button>
                <button type="button" onClick={() => setEditingId(null)} className="px-4 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition">Cancel</button>
              </div>
            </form>
          ) : (
            <>
              <h2 className="text-xl font-bold text-blue-800 mb-1">{p.title}</h2>
              <p className="text-gray-700 mb-2">{p.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  By <span className="font-semibold">{p.author}</span>
                </span>
                <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded">Published</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => startEdit(p)}
                  className="px-4 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition font-semibold text-sm shadow"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(p.id)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold text-sm shadow"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;