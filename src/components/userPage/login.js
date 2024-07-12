import {useState} from 'react';
import {Link} from "react-router-dom";
const Login = ()=>{
const [userName, setUserName] = useState("");
const handleSubmit=(e)=>{
  e.preventDefault();
  alert(userName);
}
    return (<div className="min-h-[700px] flex justify-center items-center">
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
<div>
  <lable for="user_name"> User Name:  </lable>
<input type="text" name="" id="user_name" placeholder="User Name" onChange={(e)=>setUserName(e.target.value)} className="border" />
</div>
<div>
  <lable for="user_password" className=""> User Password:  </lable>
<input type="password" name="" id="user_password" placeholder="User Password" className="border" maxLength="12" />
</div>
<button>LogIn</button>
<div><Link to="/register" >Sign Up now</Link></div>
    </form>
    </div>)
}
export default Login;