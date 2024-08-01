import React from 'react'
const SortProducts = ({sortCriteria,onHandleSortCheange}) =>{
  return (<>
    <select value={sortCriteria} onChange={onHandleSortCheange} className="w-42">
 <option value="">Sort By</option>
  <option value="price-dsc">Heigh to Low Price</option>
   <option value="price-asc">Low to Heigh Price</option>
   <option value="rating-dsc">Heigh to Low Rating</option>
   <option value="rating-asc">Low to Heigh Rating</option>
   <option value="title-dsc">Title A to Z</option>
   <option value="title-asc">Title Z to A</option>
  </select>
  </>)
}
export default SortProducts;