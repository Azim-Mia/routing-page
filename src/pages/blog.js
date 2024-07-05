import { useParams} from "react-router-dom";
const Blog = ()=>{
    let {id} =useParams();
    return (
        <div style={{ fontSize: "50px" }}>
        This is blog Page
         showing post ID:{id}
        </div>
    );
}
export default Blog;