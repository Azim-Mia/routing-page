import {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
const Login = ()=>{
const [email, setEmail] = useState("");
const [userPassword, setUserPassword] = useState("");
const navigate=useNavigate();
const handleSubmit=(e)=>{
  e.preventDefault();
if(email === "azim@gmail.com" && userPassword === "12345"){
  const user={
    name:"Azim Islam",
    email:"azim@gmail.com",
    password:"12345",
    address:"Jamalpur sador",
    permanentAddresss:"Utmarchar, post:Kharma, Village:Dewangonj",
    isAdmin:true,
  }
  localStorage.setItem('userData', JSON.stringify({user, isSignIn:true}));
  const storeData=JSON.parse(localStorage.getItem('userData'));
  const path = storeData.isSignIn ? "/deshboard/user/profile":"/login";
  navigate(path, {state:user});
}else{
alert("Not match Password or User Name")
  navigate('/login')
}
}
    return (<div className="min-h-[700px] flex justify-center items-center">
    <form onSubmit={handleSubmit} className="flex text-[0.9rem] flex-col items-center justify-center bg-pink p-4 gap-4 md:text-[2rem]">
<div className="items-center">
  <lable for="user_name"> User Name:  </lable>
<input type="email" name="" id="user_name" placeholder="User Name" onChange={(e)=>setEmail(e.target.value)} className="border" />
</div>
<div>
  <lable for="user_password" className=""> User Password:  </lable>
<input type="password" name="" id="user_password" placeholder="User Password" className="border" maxLength="12" onChange={(e)=>setUserPassword(e.target.value)} />
</div>
<button className="btn">LogIn</button>
<div><Link to="/register" >Sign Up now</Link></div>
    </form>
    </div>)
}
export default Login;