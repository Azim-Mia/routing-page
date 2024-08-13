import {
  createBrowserRouter,
} from "react-router-dom";
import NewNavber from '/data/data/com.termux/files/home/routing-page/src/navigation/navbar.js';
import View from '/data/data/com.termux/files/home/routing-page/src/reduxToolkits/productFeaturs/view.js';
/*import Home from '../../src/pages/home';*/
import AddCard from '../../src/addCardPage/addCard'
import OrderSuccess from '../../src/addCardPage/orderSuccess'
import OrderFail from '../../src/addCardPage/orderFail';
import Login from '../../src/components/userPage/login';
/*import Logout from '../../src/components/userPage/logout';*/
import Profile from '../../src/components/userPage/profile';
import Orders from '../../src/components/userPage/orders';
import AdminUsers from '../../src/components/addminPage/adminCategoryProduct';
import Category from '../../src/components/addminPage/adminUsers';
import Blog from '../../src/pages/blog';
import Contract from '../../src/pages/contract';
import About from '../../src/pages/about';
import Products from '../../src/pages/products';
import Error from '../../src/pages/error';
/*import Myapp from '../../src/pages/myApp';*/
import ProtektedPage from '../../src/components/protektedPage/protektedPage.js';
import AdminProteckted from '../../src/components/protektedPage/adminProteckted.js';
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
    path: "/",
    element:<Products />,
  },
  {
  path:"/deshboard/user" ,
  element:<ProtektedPage />,
  children:[
  {
  path:"profile",
  element:<Profile />,  
},
{
  path:"order",
  element:<Orders />,  
},
  ],
  },
    {
  path:"deshboard/admin" ,
  element:<AdminProteckted />,
  children:[
{
  path:"profile",
  element:<Profile />,  
},
{
  path:"category",
  element:<Category />,  
},
{
  path:"users",
  element:<AdminUsers />,  
},
{
  path:"admin_product",
  element:<AdminUsers />,  
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
    element:<Login />,
  },
      {
    path: "/blog",
    element:<Blog />,
  },
      {
    path: "/my-app",
    element:<View />,
  },
  {
  path:"/routing-page",
  element:<Products />,  
},
  {
  path:"/add-card",
  element:<AddCard />,  
},
  {
  path:"/payment/success/:id",
  element:<OrderSuccess />,  
},
  {
  path:"/payment/fail/:id",
  element:<OrderFail />,  
},
  {
  path:"/payment/cancel/:id",
  element:<Blog />,  
},
    ],
  },
]);