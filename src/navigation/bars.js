import {useState} from 'react';
import "./bars.css";
const Bars =() =>{
const [burger_class, setBurgerClass] =useState("burger-bar unClicked");
const [menu_class,setMenuClass] =useState("menu hidden");
const [isMenuClicked,setIsClicked] =useState(false);
  const updateMenu=()=>{
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    }else{
     setBurgerClass("burger-bar unClicked");
      setMenuClass("menu hidden");
    }
    setIsClicked(!isMenuClicked)
  }
  return ( <>
  <div className="nav">
  <div className="burger_menu" onClick={updateMenu}> 
  <div className={burger_class}></div>
    <div className={burger_class}></div>
    <div className={burger_class}></div>
  </div>
  </div>
  <div className="text-black text-3xl">
  <div className ={menu_class}>
  <ul className="p-2 text-center text-white">
  <li className=" p-1 hover:text-black hover:border-b">banagla</li>
    <li className=" p-1 hover:text-black border-b mt-1">english</li>
    <li className="p-1 hover:text-black border-b mt-1">Math</li>
    <li className="p-1 hover:text-black border-b mt-1">sceince</li>  
  </ul>
  </div>
  </div>
  </>)
}
export default Bars;