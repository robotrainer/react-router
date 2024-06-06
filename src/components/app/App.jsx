import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Layout from "../pages/Layout";

import PrivateRote from "./PrivateRoute";

const routes = [
  {
    path: "/", // http://localhost:3000/
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRote>
            <Home />
          </PrivateRote>
        ),
      },
      {
        path: "posts",
        element: (
          <PrivateRote>
            <Posts />
          </PrivateRote>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRote>
            <Profile />
          </PrivateRote>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
];

const router = process.env.production
  ? createBrowserRouter(routes)
  : createHashRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
