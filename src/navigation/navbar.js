import {useState,useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import Bars from './bars'
const Header =() =>{
const [isLogedIn,setIsLogedIn]=useState(false);
useEffect(()=>{
/*const userData =localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'));*/
setIsLogedIn(true)
/*
problem getItem null; result =userData.isSignIn
setIsLogedIn(userData.isSignIn);*/
},[]);
const handleLogOutClick=()=>{
setIsLogedIn(false);
localStorage.setItem('isSignIn', JSON.stringify(true));
}
  return ( <>
  <header className="navbar-header  items-center sm:bg-coral text-[1rem] md:bg-pink lg:bg-orange xl:bg-blue">
      <div className="brand">
       <div className=""> <Bars /></div>
  <Link to="/my-app" className="flex justify-center items-center"> My-app</Link>
  </div>
  <nav>
  <ul>
  <li className="p-2 hover:border-b-2"><Link to="/home">products</Link></li>
    <li className="p-2 hover:border-b-2"><Link to="/contract">Contract</Link></li>
    {
      isLogedIn && <><li className="p-2 hover:border-b-2"><Link to="/logout" onClick={handleLogOutClick}>LogOut</Link></li> </>
    }
    {
      !isLogedIn && <><li className="p-2 hover:border-b-2"><Link to="/login" onClick={handleLogOutClick}>LogIn</Link></li></>
    }
    
        <li className="p-2 hover:border-b-2"><Link to="/about">About</Link></li>
  </ul>
  </nav>
  </header>
   <Outlet />
  </>)
}
export default Header;