
import {  NavLink } from 'react-router'
import { useContext } from 'react'
import AuthContext from '../AuthContext'

const Nav = () => {

    const {isAuthenticated , setIsAuthenticated} = useContext(AuthContext);

    const handleLogout =()=>{
        setIsAuthenticated(false)
     
    }
  return (
    <header className="bg-white shadow mb-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-blue-700 tracking-tight">BlogPost</div>
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 font-medium transition-colors ${
                isActive ? 'border-b-2 border-blue-700 pb-1' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 font-medium transition-colors ${
                isActive ? 'border-b-2 border-blue-700 pb-1' : ''
              }`
            }
          >
            About
          </NavLink>
          

          {
            isAuthenticated ? (
                <>
                <NavLink
            to="/Dashboard"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 font-medium transition-colors ${
                isActive ? 'border-b-2 border-blue-700 pb-1' : ''
              }`
            }
          >
            Dashboard
          </NavLink>

          <button
          onClick={handleLogout}
           className='bg-rose-500 p-4 rounded-md cursor-pointer'>Logout </button>
          </>
            ) :
            <NavLink
            to="/Login"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 font-medium transition-colors ${
                isActive ? 'border-b-2 border-blue-700 pb-1' : ''
              }`
            }
          >
            Login
          </NavLink>
          }
          
        </nav>
      </div>
    </header>
  )
}

export default Nav