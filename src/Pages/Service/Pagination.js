import React from 'react';

const Pagination = ({totalpost,postPerPage,setCurrentPage,currentPage}) => {
  let pages=[];

  for (let i =1;i<=Math.ceil(totalpost/postPerPage);i++){
    pages.push(i)
  }
  return (
    <nav aria-label="Page navigation example" className='flex content-center justify-center mt-5'>
  <ul class="inline-flex -space-x-px">
  <li>
      <button onClick={()=>{ currentPage!=1&& setCurrentPage(currentPage-1)
      console.log(currentPage);
      }} class="px-3 mx-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
    </li>
    {
      pages.map((page,index)=><li>
        <button key={index} onClick={()=>setCurrentPage(page)} class={`px-3 mx-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage===page &&"bg-red-600 text-zinc-200"}`}>{page}</button>
      </li>)
    }
    <li>
      <button onClick={()=>{ currentPage!=pages.length && setCurrentPage(currentPage+1)
      console.log(currentPage);
      }} class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
    </li>
    
  </ul>
</nav>
  );
};

export default Pagination;