
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import Bars from './bars'
const Header =() =>{
  return ( <>
  <header className="navbar-header">
      <div className="brand">
       <div className=""> <Bars /></div>
  <Link to="/my-app" className="pt-4"> My-app</Link>
  </div>
  <nav>
  <ul>
  <li className="p-2 hover:border-b-2"><Link to="/home">Home</Link></li>
    <li className="p-2 hover:border-b-2"><Link to="/contract">Contract</Link></li>
        <li className="p-2 hover:border-b-2"><Link to="/login">LogIn</Link></li>
        <li className="p-2 hover:border-b-2"><Link to="/about">About</Link></li>
  </ul>
  </nav>
  </header>
   <Outlet />
  </>)
}
export default Header;