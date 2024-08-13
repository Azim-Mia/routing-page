/*import { FaBars } from "react-icons/fa";*/
import {useEffect, useState} from 'react';
const About = ()=>{
const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
    return <div>
    <p>{count}</p>
    <h3>This is About</h3>
    </div>
}
export default About;