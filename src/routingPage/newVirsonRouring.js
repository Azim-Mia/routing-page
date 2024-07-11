import {
  createBrowserRouter,
} from "react-router-dom";
import NewNavber from '/data/data/com.termux/files/home/routing-page/src/navigation/navbar.js';
/*import Home from '../../src/pages/home';*/
import Login from '../../src/userPage/login';
import Logout from '../../src/userPage/logout';
import Blog from '../../src/pages/blog';
import Contract from '../../src/pages/contract';
import About from '../../src/pages/about';
import Products from '../../src/pages/products';
import Error from '../../src/pages/error';
import Myapp from '../../src/pages/myApp';
import ProtektedPage from '../../src/userPage/protektedPage';
import ProductDetails from '../../src/components/productDetails';
export const router = createBrowserRouter([
  {
    path: "/",
    element:<NewNavber />,
    errorElement:<Error />,
    children:[
           {
    path: "/",
    element:<Products />,
  },
  {
  path:"/deshboard" ,
  element:<ProtektedPage />,
  children:[
{
  path:"user/profile",
  element:<Products />,  
},
  ],
  },
         {
    path: "/home",
    element:<Products />,
  },

       {
    path: "/contract",
    element:<Contract />,
  },
         {
    path: "/products/:id",
    element:<ProductDetails />,
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
      {
    path: "/my-app",
    element:<Myapp />,
  },
    ],
  },
]);