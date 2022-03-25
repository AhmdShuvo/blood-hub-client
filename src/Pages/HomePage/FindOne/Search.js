import React from 'react';

const Search = () => {
return (
 
<center>
<section  style={{borderTop:"10px solid #00acb1",marginBottom:'20px'}} className='container w-9/12 shadow-2xl p-10'>
  <form action="" className='md:flex items-center justify-evenly items-center '>
   <div className='w-full'>
       <h1 >Search Topic</h1>
   <input  className='w-full' type="text" />
   </div>
   <div  className='w-full'>
       <h1 >Location</h1>
   <input  className='w-full' type="text" />
   </div>
   <br />
   <button style={{marginTop:'70px'}} class="w-auto bg-blue-500 hover:bg-blue-400 text-white  py-2 m-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Search
</button>

  </form>
</section>
</center>
);
};

export default Search;

