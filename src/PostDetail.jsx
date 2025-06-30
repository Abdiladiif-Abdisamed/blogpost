import { useParams } from "react-router"
import { usePost } from "./PostContext"
const PostDetail = () => {

    const {PostId} = useParams()
    const {posts} = usePost()
     const post = posts.find(p => String(p.id) === String(PostId));

  if (!post) return <div className="text-center py-10">Post not found</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow mt-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.description}</p>
      <div className="text-sm text-gray-500">By <span className="font-medium">{post.author}</span></div>
    </div>
  );
};


export default PostDetail