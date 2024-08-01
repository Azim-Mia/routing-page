import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
/*import productData from '/data/data/com.termux/files/home/routing-page/src/dataStore/productData.js'*/
import Pagination from '/data/data/com.termux/files/home/routing-page/src/pagination/pagination.js';
import Search from '../../src/components/search';
import SortProducts from '../../src/components/sort';
import './stylePage/products.css';
const Products = () =>{
const [products,setProducts]=useState([]);
const [isLoading, setLoading]=useState(false);
const [isError, setError]=useState(null);
const [totaPages,setTotalPages]=useState(0); 
const [currentPage,setCurrentPage]=useState(1); 
  const itemPerPage = 9;
  //search
  const [searchTerm, setSearchTerm] = useState('');
  //sorting -desen and acen
  const [sortCriteria, setSortCriteria] = useState('');
const fetchData=(currentPage,searchTerm,sortCriteria)=>{
  setLoading(true)
  let url=`https://dummyjson.com/products?limit=${itemPerPage}&skip=${(currentPage-1) * itemPerPage}`;
  if(searchTerm !== ''){
     url=`https://dummyjson.com/products/search?q=${searchTerm}&limit=${itemPerPage}&skip=${(currentPage-1) * itemPerPage}`;
  }
  if(sortCriteria){
  const splitArray= sortCriteria.split("-");
    url += `&sortBy=${splitArray[0]}&order=${splitArray[1]}`;
  }
fetch(url)
.then((res)=>{
  if(!res.ok){
    throw new Error("Data is fetch Problem, Cheack now")
  }else{
    return res.json();
  }
})
.then((data)=>{
setProducts(data.products)
setTotalPages(Math.ceil(data.total/itemPerPage))
}).catch((error)=>setError(error.message))
.finally(()=>setLoading(false))
};
useEffect(()=>{
fetchData(currentPage,searchTerm);
},[currentPage,searchTerm,sortCriteria])  
const handleSearchTerm =(event)=>{
  setSearchTerm(event.target.value);
  setCurrentPage(1); //currentPage as a first page 
}
const handleSortChange = (e)=>{
  setSortCriteria(e.target.value);
}
/*const filterProduct =products.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))*/
  return (<> 
    <div className="sort-search">
<SortProducts 
onHandleSortCheange={handleSortChange}
sortCriteria={sortCriteria}
/>
 <Search
  searchTerm={searchTerm}
  onHandleSearchCheange={handleSearchTerm} 
  />
  </div>
      {isLoading && <p>Data is Loading ...</p>}
  <p>{isError}</p>
  <section className="grid grid-cols-1 text-center ml-2 mr-2 gap-2  md:grid-cols-1 md:text-2xl lg:grid-cols-3 xl:grid-cols-5">
  {
  products?.map((product)=>{
  const {id,title,price,category}=product;
      return <article key ={id} className="bg-pink">
     <Link to={`/products/${id}`} state={product}> <img src={product.thumbnail} alt="productImg" className="" /></Link>
      <b>{title} </b>
      <p>{category}</p>
     <div className="flex justify-center items-center justify-between pl-6 pr-6 gap-2">
     <b>Price{price}</b>
     <p>Rating: 5</p>
     </div>
          <div className="flex justify-center items-center justify-between pl-6 pr-6 gap-5">
     <p className="bg-yellow p-2 btn">add-card</p>
   <p>item-color: 4</p>
     </div>
          <Link to={`/products/${id}`} state={product} className=" flex justify-center btn mt-7 "> Show Product Details...</Link>
      </article>
    })
  }
  </section>
  <div className="mt-7 flex justify-center "><Pagination
  totaPages={totaPages}
  currentPage={currentPage}
  onHandleCurrentPage={setCurrentPage}
  /></div>

</> )
}
export default Products;