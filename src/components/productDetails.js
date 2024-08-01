import React from 'react';
import "../App.css"
import {useLocation, Link} from 'react-router-dom';
const ProductDetails=()=>{
const {state} = useLocation();
  return (<>
<section className=" flex flex-col text-3xl text-center bg-pink">
{
  state ? <article className="">
        <img src={state.images[0]} alt="productImg" />
      <p>{state.title}</p>
        <p>{state.price}</p>
          <p>{state.category}</p>
         <p>{state.description}</p>
  </article>:<p>Not Found Product data</p>
}
<Link to="/products" className="flex_costomise mt-4 mb-4" >Beack New</Link>
</section>
  </>
  )
}
export default ProductDetails;