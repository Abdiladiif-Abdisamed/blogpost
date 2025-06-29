export const posts = [
  {
    id: 1,
    title: "React",
    description: "This is a description of the first post.",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Sample Post Title 2",
    description: "This is a description of the second post.",
    author: "Jane Doe"
  },
  {
    id: 3,
    title: "Sample Post Title 3",
    description: "This is a description of the third post.",
    author: "Alice Smith"
  }
];

const Posts = () => {
  return (
     <div className="space-y-6">
            {posts.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{p.title}</h2>
                <p className="text-gray-700 mb-4">{p.description}</p>
                <div className="text-sm text-gray-500">By <span className="font-medium">{p.author}</span></div>
              </div>
            ))}
          </div>
  );
}

export default Posts;
