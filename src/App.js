import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import {router} from '/data/data/com.termux/files/home/routing-page/src/routingPage/newVirsonRouring.js'
function App() {
  return (<>
  <RouterProvider router={router} />
  </>)
}
export default App;
