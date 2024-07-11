import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import {router} from '/data/data/com.termux/files/home/routing-page/src/routingPage/newVirsonRouring.js'
import Footer from '../src/pages/footer';
function App() {
  return (<>
  <RouterProvider router={router} />
  <Footer />
  </>)
}
export default App;
