import { Outlet} from "react-router-dom";
import Login from '../userPage/login'
const ProtektedPage=()=>{
 const isLogin=true;
 const isAdmin=true;
  return  isLogin && isAdmin ? <Outlet />:<Login />
}
export default ProtektedPage;