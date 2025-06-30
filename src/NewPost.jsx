import React, { useState } from 'react'
import { usePost } from './PostContext';
const NewPost = () => {
 const [form , setForm ] = useState({title : ' ' , description : ' ' , author: ''})

 const [success , setSuccess] = useState(false)

 const { addPost } = usePost();



 const handleChange =(e)=>{

  setForm({...form, [e.target.name] :  e.target.value} )

 }

 const handleSubmit =(e)=>{

  e.preventDefault()

  addPost({
    title : form.title,
    description : form.description,
    author : form.author
  })

  setForm({ title : '', description : '' , author : ''})
  setSuccess(true)
  setTimeout(() => setSuccess(false), 2000)


 }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            placeholder="Write your post..."
            rows={4}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            placeholder="Your name (optional)"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
        >
          Add Post
        </button>
        {success && (
          <div className="text-green-600 text-center font-medium mt-2">Post added successfully!</div>
        )}
      </form>
    </div>
  )
}

export default NewPost