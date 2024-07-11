import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import productData from '/data/data/com.termux/files/home/routing-page/src/dataStore/productData.js'
import './stylePage/products.css';
const Products = () =>{
const [products,setProducts]=useState([]);
const [isLoading, setLoading]=useState(false);
const [isError, setError]=useState(null);
const fetchData=()=>{
  setLoading(true)
  fetch('https://dummyjson.com/products')
.then((res)=>{
  if(!res.ok){
    throw new Error("Data is fetch Problem, Cheack now")
  }else{
    return res.json();
  }
})
.then((data)=>{
setProducts(data.products)
}).catch((error)=>setError(error.message))
.finally(()=>setLoading(false))
};
useEffect(()=>{
fetchData();
},[])  
 const productss=productData();
  return (<> 
    {isLoading && <p>Data is Loading ...</p>}
  <p>{isError}</p>
  <section className="grid grid-cols-1  text-center ml-2 mr-2 gap-2  md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5">
  {
  products?.map((product)=>{
  const {id,title,price,category}=product;
      return <article key ={id} className="bg-pink">
     <Link to={`/products/${id}`} state={product}> <img src={product.thumbnail} alt="productImg" /></Link>
      <p>{title}</p>
        <p>{price}</p>
          <p>{category}</p>
          <Link to={`/products/${id}`} state={product} className="bg-white "> Show Product Details...</Link>
      </article>
    })
  }
  </section>
  
  <section className="grid grid-cols-1 text-center  gap-2  md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5">
 {
   productss?.map((productsss)=>{
   const {id,image, title} =productsss;
   return <article className=" flex flex-col shadow-3xl justify-center items-center pb-4 bg-pink ml-2 mt-8 md:h-30 w-30 lg:h-106 w-102">
   <img src={image} alt='productImage' className=" p-2 md:h-30 w-30 lg:h-72 w-96" />
   <i className="text-3xl text-black sm:text-1xl md:text-2xl">Product Name: {title}</i>
      <b>Price :300</b>
   <div className="flex">
   <p className="btn">Buy now</p>
      <p className="pl-4">Rating</p>
   </div>
   <div>
   <i>Item of Product:color</i>
   </div>
   <div><b className="mt-8 text-4xl text-orange"><Link to={`/products/${id}`}>Learn more... </Link></b></div>
   </article>
 })
 }
  </section>
</> )
}
export default Products;