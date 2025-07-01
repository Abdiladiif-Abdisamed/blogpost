import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { usePost } from './PostContext';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('search') || '';
  const [search, setSearch] = useState(searchTerm);

  const { posts, deletePost } = usePost();

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            navigate(search ? `?search=${encodeURIComponent(search)}` : "");
          }}>
          <input
            type="text"
            name="search"
            placeholder="Search posts"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 w-150 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition"
          />
          <button type="submit" className='bg-blue-500 p-4 rounded-md text-white '>Search</button>
        </form>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Blog Posts</h1>
      <div className="space-y-6">
             <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              No posts found matching { search } your search.
            </span>
          </div>
        ) : (
          filteredPosts.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            >
              <Link to={`/posts/${p.id}`} className="text-xl font-semibold text-blue-700 mb-4 ">
                {p.title}
              </Link>
              <br />
              <Link to={`/posts/${p.id}`} className="text-gray-700 mb-4 ">{p.description}</Link>
              <div className="text-sm text-gray-500 flex justify-between">
                <button
                  onClick={() => deletePost(p.id)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold text-sm shadow">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      </div>
      <footer className="mt-16 border-t pt-6 text-center text-gray-500 text-sm">
        <span>
          &copy; {new Date().getFullYear()} BlogPost. All rights reserved.
        </span>
        <span className="block mt-1">
          Made with <span className="text-blue-600">Abdiladiif</span> by Your Team
        </span>
      </footer>
    </div>
  )
}

export default Home