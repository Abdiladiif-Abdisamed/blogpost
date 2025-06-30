import {createContext, useContext, useState} from 'react'
import { posts as initialPosts } from './Posts'


export const PostContext =createContext()


export const usePost = ()=> useContext(PostContext)


export const PostProvider = ({children})=>{

    const [posts , setPosts] = useState(initialPosts);

    const deletePost =(id)=> setPosts(posts.filter(post => post.id !== id))

  const editPost = (updatedPost) => setPosts(
  posts.map(post => post.id === updatedPost.id ? updatedPost : post)
);


    const addPost = (post )=> setPosts([post,...posts])


    return (

        <PostContext.Provider value={{ posts , addPost,deletePost, editPost}} >
            {children}
        </PostContext.Provider>
    )

} 

