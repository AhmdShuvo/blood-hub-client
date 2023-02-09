import React from 'react';
const SearchBar = ({setSearchText}) => {
    return (
   
<div className="mb-10 bg-gray-100 py-10 px-10">
        <div>
        <form action="">
          <div className="md:flex items-center bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">  
            </div>
           <div className='md:flex items-center w-11/12 justify-between'>
           <div className="flex  p-4 w-full space-x-4 rounded-lg">
             
              <input onChange={(e)=>setSearchText(e.target.value)} className="bg-gray-100 w-full outline-none border-none" type="text" placeholder="Search By Location Or By Blood Group..." />
            </div>
         
            <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <button type='submit'> <i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
           </div>
          </div>
          </form>  
        </div>
      </div>
  
    );
};

export default SearchBar;