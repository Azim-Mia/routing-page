import {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import Bars from './bars'
const Header =() =>{
  return ( <>
  <header className="navbar-header">
      <div className="brand">
       <div className=""> <Bars /></div>
  <Link to="/my-app" className="p-6"> My-app</Link>
  </div>
  <nav>
  <ul>
  <li className="p-2"><Link to="/about">About</Link></li>
    <li className="p-2"><Link to="/products">Products</Link></li>
        <li className="p-2"><Link to="/contract">Contract</Link></li>
        <li className="p-2"><Link to="/blog">Blog</Link></li>    
  </ul>
  </nav>
  </header>
   <Outlet />
  </>)
}
export default Header;