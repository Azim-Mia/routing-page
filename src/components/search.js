const Search = ({searchTerm,onHandleSearchCheange}) =>{
  return (<div className=""> 
    <div><input type="search" placeholder="search products" value={searchTerm} onChange={onHandleSearchCheange} className="border-b bg-pink text-center w-72"/></div>
 
  </div>)
}
export default Search;