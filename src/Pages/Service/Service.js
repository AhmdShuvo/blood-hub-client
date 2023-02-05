import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Profile from './Profile';
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
                services.slice(startIndex,lastIndex).map((service,index)=><Profile key={service.index}
                donor={service}
                />
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