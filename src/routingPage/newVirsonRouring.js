import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from '/data/data/com.termux/files/home/routing-page/src/navigation/navbar.js';
import Home from '../../src/pages/home';
import Login from '../../src/pages/login';
import Logout from '../../src/pages/logout';
import Blog from '../../src/pages/blog';
import Contract from '../../src/pages/contract';
import About from '../../src/pages/about';
import Products from '../../src/pages/products';
import Error from '../../src/pages/error';
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Header />,
    children:[
           {
    path: "/",
    element:<Home />,
  },
           {
    path: "*",
    element:<Error />,
  },
       {
    path: "/contract",
    element:<Contract />,
  },
    {
    path: "/about",
    element:<About />,
  },
    {
    path: "/products",
    element:<Products />,
  },
      {
    path: "/login",
    element:<Login />,
  },
      {
    path: "/logout",
    element:<Logout />,
  },
      {
    path: "/blog",
    element:<Blog />,
  },
    ],
  },
]);