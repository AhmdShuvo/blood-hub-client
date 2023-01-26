import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const Service = () => {
  const [currentpost,setCurrentPost]=useState(1)
  const [postPerPage,setpostPerage]=useState(9)
  const [searchText,setSearchText]=useState('')
    const [services,setServices]=useState([])
    const [donors,setDonors]=useState([])
    
    const lastIndex=currentpost * postPerPage;
    const startIndex=lastIndex-postPerPage;
    const isValidSearch = (row, searchText) => {
      const text = searchText.trim().toLowerCase()
      console.log(row.name);
      return  row.group.toLowerCase().includes(text) || row.address.toLowerCase().includes(text);
  };
  
    
    useEffect(()=>{
      fetch('./clientlist.json').then(res=>res.json()).then(data=>setServices(data))
    },[])
    useEffect(() => {
      const filteredRows = services.filter((row) => isValidSearch(row, searchText))
      searchText?setServices(filteredRows): fetch('./clientlist.json').then(res=>res.json()).then(data=>setServices(data))
      console.log(filteredRows);
     
  }, [searchText])
    return (
        <>
        <section className='search-bar mb-24'>
            <SearchBar setSearchText={setSearchText} />
            <div className="grid md:grid-cols-3 ms-5 gap-1 ml-8">
            {
                services.slice(startIndex,lastIndex).map(service=><a
                    href=" #" 
                    className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                     {service.name} {service.group} <br />
                     {service.address}
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