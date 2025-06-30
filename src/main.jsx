import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Router from './routes.jsx'
import { AuthProvider } from './AuthContext.jsx'
import {PostProvider} from './PostContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PostProvider>
    <RouterProvider router={Router}/>
    </PostProvider>
    </AuthProvider> 
  </StrictMode>,
)
