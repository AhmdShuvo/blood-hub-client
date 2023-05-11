import React from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const ResetPass = () => {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { resetPass } = useAuth()
    const handleReset = e => {
        e.preventDefault()
        resetPass(email)
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
          }, 5000);
    }

    const handleSearch = (email) => {
        fetch(`https://bloodhub-server-api.onrender.com/user/${email}`).then(datas => datas.json()).then(users => setUsers(users[0]))
    }

    
    return (
        <div className='container mx-auto px-5 mt10'>
            <div class="p-8 rounded border border-gray-200">    <h1 class="font-medium text-3xl">Reset Password</h1>
                <form>
                    <div class="mt-8 space-y-6 ">
                        <div className='"'>
                            <div>
                                <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="name" class="bg-gray-100 border  border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your email Address" />
                            </div>
                            <div style={{ width: '20%', textAlign: 'center' }} className="bg-red-600  py-3 mt-10 text-white font-semibold  mx-10 rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                                <a onClick={() => handleSearch(email)} > Find My Account <i className="fa-solid fa-magnifying-glass"></i></a>
                            </div>
                        </div>
                        <div class="space-x-4 mt-8 flex justify-center ">

                           {
                            success&& <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span class="font-medium">Reset Link Sent</span> Check Your Email
                        </div>
                           }
                        </div>


                    </div>

                    <div className="container mx-auto px-4 mt-10 border-zinc-200 drop-shadow-2xl">
                        {
                            users.email ? <div class="flex-1 min-w-0">
                                <div>
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {users.displayName}
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {users.email}
                                    </p>
                                </div>
                                <button onClick={handleReset} class="py-2 px-4 mt-5 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Request Reset</button>
                            </div> : <h4 className='text-3xl'> No Users found</h4>
                        }
                    </div>


                </form>
            </div>
        </div>
    );
};

export default ResetPass;