import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchPosts} from '/data/data/com.termux/files/home/routing-page/src/reduxToolkits/productFeaturs/productSlice.js'
const Postfiews =()=>{
  const dispatch=useDispatch();
 const {error,isLoading,posts}=useSelector((state) =>state.posts)
 useEffect(()=>{
   dispatch(fetchPosts());
 })
  return <div> 
  {isLoading && <h1>Data is Loading..</h1>}
  {error && <h1>{error.message} fetch problem</h1>}
  <section className="section">
  {posts && posts.map((post)=>{
    return <article className="article">
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </article>
  })}
  </section>
     </div>
}
export default Postfiews;