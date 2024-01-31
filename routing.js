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
