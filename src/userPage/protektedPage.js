import { Outlet} from "react-router-dom";
import Login from './login'
const ProtektedPage=()=>{
 const isLogin=false;
  return (
  <div>{
  isLogin ? <Outlet />:<Login />
  }</div>
  )
}
export default ProtektedPage;