import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
} from "react-router-dom";

import Home from "../../../pages/Home";
import Posts from "../../../pages/Posts";
import Login from "../../../pages/Login";
import Signup from "../../../pages/Signup";
import Profile from "../../../pages/Profile";
import Layout from "../../../pages/Layout";
import Post from "../../../pages/Post";

import PrivateRote from "../../PrivateRoute";
import ErrorPage from "../../../pages/ErrorPage";

import { postLoader, postsLoader } from "../../../../api";

const routes = [
  {
    path: "/", // http://localhost:3000/
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        loader: postsLoader,
        element: (
          <PrivateRote>
            <Posts />
          </PrivateRote>
        ),
      },
      {
        path: "posts/:postId",
        loader: postLoader,
        element: (
          <PrivateRote>
            <Post />
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
      // {
      //   path: "*",
      //   element: <Navigate to="/" />,
      // },
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

export const router = process.env.production
  ? createBrowserRouter(routes)
  : createHashRouter(routes);
