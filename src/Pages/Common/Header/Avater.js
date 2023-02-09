import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'



const Avater = ({user,logOut}) => {

  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };


    
    return (
        <div>
   <div className="dropdown">
      <button
        className="  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center"
        onClick={handleDropDown}
      ><img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="User dropdown"/>
      </button>

      <div
        id="dropdown"
        className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>{user.dispayName}</div>
      <div class="font-medium truncate">{user.email}</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="avatarButton">
      <li>
        <Link to={"/dashboard"} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link to={`/settings/${user.displayName}`} href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
      </li>
      <li>
        <Link to={`/profile/${user.displayName}`}  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
      </li>
    </ul>
    <div class="py-1">
      <a href='' onClick={logOut} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
      </div>
    </div>


       
      </div>
    );
};

export default Avater;