import { createBrowserRouter } from "react-router"; // Correct import for React Router v6
import App from "./App";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NewPost from "./NewPost";
import Posts from "./Posts";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "./SignUp";
import PostDetail from "./PostDetail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "Dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Posts />
          },
         
          {
            path: "NewPost",
            element: <NewPost />
          }
        ]
      },
      {
        path: "Login",
        element: <Login />
      }, 
      {
        path: "SignUp",
        element: <SignUp/>
      }
      , {
            path:"Posts/:PostId",
            element:<PostDetail/>
          }
    ]
  }
]);

export default Router;
