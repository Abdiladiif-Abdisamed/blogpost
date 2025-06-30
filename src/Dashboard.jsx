
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-10 tracking-tight text-blue-400">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <Link
            to="/Dashboard"
            className="block text-base font-medium px-4 py-2 rounded transition-colors hover:bg-gray-800 hover:text-blue-300 focus:bg-gray-800 focus:outline-none"
          >
            Posts
          </Link>
          <Link
            to="/Dashboard/NewPost"
            className="block text-base font-medium px-4 py-2 rounded transition-colors hover:bg-gray-800 hover:text-blue-300 focus:bg-gray-800 focus:outline-none"
          >
            New Post
          </Link>
        </nav>
        <div className="mt-auto pt-10 text-xs text-gray-400">© {new Date().getFullYear()} BlogPost</div>
      </aside>
      

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow p-6 min-h-[60vh]">
          <Outlet />
        </div>
        <footer className="mt-16 border-t pt-6 text-center text-gray-500 text-sm">
        <span>
          &copy; {new Date().getFullYear()} BlogPost. All rights reserved.
        </span>
        <span className="block mt-1">
          Made with <span className="text-blue-600">Abdiladiif</span> by Your Team
        </span>
      </footer>
      </main>
      
    </div>
    
  )
}

export default Dashboard