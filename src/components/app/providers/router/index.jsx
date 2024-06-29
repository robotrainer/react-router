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

import { postLoader, postsLoader } from "../../../../api/loaders";
import { loginAction } from "../../../../api/actions";

const routes = (authContext) => [
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
    action: loginAction(authContext),
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
];



export const router = (authContext) => {
  const arrayRoutes = routes(authContext);

  return process.env.production
    ? createBrowserRouter(arrayRoutes)
    : createHashRouter(arrayRoutes);
};
