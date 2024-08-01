import { Outlet} from "react-router-dom";
import Login from '../userPage/login'
const ProtektedPage=()=>{
 const isAdmin=true;
 const isSignIn =true;
  return  isSignIn && isAdmin ? <Outlet />:<Login />
}
export default ProtektedPage;