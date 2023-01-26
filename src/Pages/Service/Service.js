import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const Service = () => {
  const [currentpost,setCurrentPost]=useState(1)
  const [postPerPage,setpostPerage]=useState(5)
    const services=[1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99,100,101,102]
    
    const lastIndex=currentpost * postPerPage;
    const startIndex=lastIndex-postPerPage;
    return (
        <>
        <section className='search-bar mb-24'>
            <SearchBar/>
            <div className="grid md:grid-cols-3 ms-5 gap-1 ml-8">
            {
                services.slice(startIndex,lastIndex).map(service=><a
                    href=" #" 
                    className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021 num:{service}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in
                      reverse chronological order.
                    </p>
                  </a>
                  )
            }
            </div>
            {/* Pagination / */}
            
            <Pagination totalpost={services.length}
            postPerPage={postPerPage}
            currentPage={currentpost}
            setCurrentPage={setCurrentPost} />

        </section>
        </>
            );
};

export default Service;