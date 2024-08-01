import '../../src/App.css';
const Pagination =({totaPages,currentPage,onHandleCurrentPage})=>{
const handlePreviusChange=()=>{
if(currentPage > 1){
  onHandleCurrentPage(currentPage - 1);
}
}
const handleNextPage=()=>{
if(currentPage < totaPages){
  onHandleCurrentPage(currentPage + 1);
}
}
const handleFirstPage =()=>{
  onHandleCurrentPage(1)
}
const handleLastPage =()=>{
  onHandleCurrentPage(totaPages)
}
const visibleButtonFunction =()=>{
  const visibleBtn= 6;
  const pages=[];
  let startPage = Math.max(1,currentPage - Math.floor(visibleBtn/2));
 let endPage= Math.min(totaPages, startPage + visibleBtn - 1);
 if(endPage - startPage < visibleBtn -1){
   Math.max(1,endPage - visibleBtn + 1)
 }
 for(let i=startPage; i< endPage; i++){
   pages.push(i);
 }
return pages;
}
const visiblePage = visibleButtonFunction();
  return (<>
  <div className="pagination">
   <button className="p-2 bg-pink btn  hover:gray-light" onClick={handleFirstPage} aria-label="first page">&laquo;</button>
  <button onClick={handlePreviusChange} disabled={currentPage === 1}className="p-2 ml-4 btn mr-4 bg-pink  hover:gray-light" aria-label="previusPage">&laquo;&laquo;</button>
    {visiblePage.map((index)=>{
    return <button key={index} onClick={()=>onHandleCurrentPage(index)} className={currentPage === index ? 'active text-4xl' : 'p-4 text-3xl hover:bg-pink'}>{index}</button>
  })}
  <button onClick={handleNextPage} disabled={currentPage === totaPages} className="p-2 btn bg-pink ml-2 hover:gray-light" aria-label="Next page">&raquo;&raquo;</button>
 <button className="p-2 btn ml-4 bg-pink  hover:bg-gray-light" onClick={handleLastPage} aria-label="last page">&raquo;</button>
  </div>
 </>)
};
export default Pagination;