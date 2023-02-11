import React from 'react';
import { useState } from 'react';


import useAuth from '../../Hooks/useAuth';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const UserSettings = () => {
    const [donors,setdonors]=useState([])
    const [donor,setdonor]=useState({})
    const [data,setdata]=useState({})
    const { user,UpdateName } = useAuth()
    const {email}=useParams()
    const [success,setSuccess]=useState()
   


    

    useEffect(()=>{
        fetch(`http://localhost:9000/user/${email}`).then(res=>res.json()).then(data=>setdonors(data))
        donors.map(donor=>setdonor(donor))

        

    },[email,donors])
   
    
    const handleChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLogindata = { ...data }
        newLogindata[field] = value;
    
        setdata(newLogindata)
    
      }

    const handleUpdate = (e) => {
        e.preventDefault()
        const proceed=window.confirm("Are you Sure")
        
       if(proceed){
   const userData={
    username:data.username||donor.displayName,
    address:data.address||donor.address,
    group:data.group||donor.group
   }
   UpdateName(userData.username)

        fetch(`http://localhost:9000/donor/${donor._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          }).then(setSuccess(true))

        

       }
    }

 console.log(data)

    return (
        <div>

            <section className=" py-1 bg-stone-300">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">
                                    My account
                                </h6>
                                <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                    Settings
                                </button>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleUpdate} >
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Username
                                            </label>
                                            <input onChange={handleChange} type="text" name='username' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue={user.displayName} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Email address
                                            </label>
                                            <input onChange={handleChange} type="email" name='address' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" disabled defaultValue={user.email} />
                                        </div>
                                    </div>
                                    <div className='w-full lg:w-6/12 px-4'>
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                              Blood Group
                                            </label>
              <select onChange={handleChange} name='group' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option value="A+">{donor.group}</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="O-">O-</option>
              </select>
            </div>
                
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Contact Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Address
                                            </label>
                                            <input onChange={handleChange} type="text" name='address' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue={donor.address} />
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    About Me
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                About me
                                            </label>
                                            
                                            {/* SUCCESS ALERT  */}
                                            {
                                                success && <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                                                    <span class="font-medium">Success alert!</span> Profile Updated Succesfully Pleae reload the page to see the changes
                                                </div>
                                            }
                                            {/* SUCCESS ALERT  */}
                                        </div>
                                    </div>
                                </div>
                                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600" type='submit'>Update </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default UserSettings;