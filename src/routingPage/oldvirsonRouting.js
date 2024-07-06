import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from '../../src/pages/home';
import Login from '../../src/pages/login';
import Logout from '../../src/pages/logout';
import Blog from '../../src/pages/blog';
function Navlink(){
  return <div>
  <div><NavLink to="/">Home</NavLink></div>
    <div><NavLink to="/page/:id">Blog</NavLink></div>
      <div><NavLink to="/login">Login</NavLink></div>
        <div><NavLink to="/logout">Logout</NavLink></div>
  </div>
}
function RoutingPageOldVirson() {
    return <div>
    <BrowserRouter>
    <NavLink />
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
     <Route path="/logout" element={<Logout />} />
     <Route path="/page/:id" element={<Blog />} />
</Routes>
        </BrowserRouter>
    </div>
}
 
export default RoutingPageOldVirson;
