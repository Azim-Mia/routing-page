import { Outlet} from "react-router-dom";
import Login from '../userPage/login'
const AdminProteckted=()=>{
 const isLogin=true;
 const isAdmin=true;
  return  isLogin && isAdmin ? <Outlet />:<Login />
}
export default AdminProteckted;