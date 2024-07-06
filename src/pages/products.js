
import productData from '/data/data/com.termux/files/home/routing-page/src/dataStore/productData.js'
const Products = () =>{
 const products=productData();
  return (<>
 {
   products?.map((product)=>{
   const {image, title} =product;
   return <section>
   <article className="" >
   <img src={image} alt='product' className=" p-2" />
   <h1>{title}</h1>
   </article>
   </section>
 })
 }
</> )
}
export default Products;