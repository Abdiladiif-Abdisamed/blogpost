import React, {  useState } from 'react'
import { posts } from './Posts'
import { useLocation } from 'react-router'


const Home = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('search') || '';
  

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
        <div>
            
          <form>
        <input
          type="text"
          name="search"
          placeholder="Search posts"
          defaultValue={searchTerm}
        />
        <button type="submit" className='bg-blue-300 p-4 rounded-md'>Search</button>
      </form>
        </div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Blog Posts</h1>
      <div className="space-y-6">
        {filteredPosts.map((p, idx) => (
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
    </div>
  )
}

export default Home