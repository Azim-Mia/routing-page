# routing-page 
What is the routing page?
 Why is it necessary?
 This is required to go from one page to another
 This requires the npm package to be used
 npm i react-router-dom
 
routing page কি 
কেন প্রয়োজন।
এ‌টির প্রয়োজন এক page  থে‌কে অনন্য page যাওয়া জন‌্য 
এ‌টি ব‌্যবহার করার জন‌্য npm package  লাগ‌বে 
npm i react-router-dom  



//install react-router-dom  
//then import  
import {  
    BrowserRouter as Router,  
    Switch,   
    Route,   
    useParams,   
} from "react-router-dom";   
 
function BlogPost() {  
    let { id } = useParams();  
    return (   
        <div style={{ fontSize: "50px" }}>   
            Now showing post {id}   
        </div>   
    );   
}
 
function Home() {   
    return <h3>home page hello azim </h3>;   
}   
    
function App() {   
    return (   
        <Router>   
            <Switch>   
                <Route path="/page/:id">   
                    <BlogPost />   
                </Route>   
                <Route path="/">   
                    <Home />   
                </Route>   
            </Switch>   
        </Router>   
    );   
}   
 
export default App;   
