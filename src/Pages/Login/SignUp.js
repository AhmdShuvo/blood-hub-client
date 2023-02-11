import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './Login.css';
import useAuth from '../../Hooks/useAuth';
const SignUp = () => {
   

  const { register, error, setError, saveUsertoDb,user } = useAuth()
  const [logInData, setData] = useState({})


  const navigate = useNavigate()


  user.email&&navigate('/')

  // Password toggle handler


  const handleChange = e => {
    const field = e.target.name
    const value = e.target.value
    const newLogindata = { ...logInData }
    newLogindata[field] = value;

    setData(newLogindata)

  }

  const handleSignup = e => {
    e.preventDefault()
    if (logInData.pass.length < 6) {
      setError("password must be 6 digits")
      return

    }
    else if (logInData.pass !== logInData.confirmpass) {
      setError("Password and confirm password should be same")
      return
    }


    else {

      register(logInData.email, logInData.pass, logInData.username)
      saveUsertoDb(logInData.email, logInData.username, logInData.password, logInData.address, logInData.group, logInData.facebook, logInData.phone, logInData.age, logInData.lastdonation)

      alert(" User Created Successfully  ")
      navigate('/donors')

    }


  }


  return (

    <div>

      <section className=" max-w-4xl p-6 mx-auto rounded-md bg-stone-300 shadow-md dark:bg-gray-800 my-20">
        <h1 className="text-xl font-bold text-dark capitalize dark:text-black">Account settings</h1>
        <form onSubmit={handleSignup}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="username">Username * </label>
              <input onChange={handleChange} required id="username" name='username' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="emailAddress">Email Address * </label>
              <input onChange={handleChange} id="emailAddress" name='email' required type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="password">Password</label>
              <input onChange={handleChange} required id="password" name='pass' type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="passwordConfirmation">Password Confirmation</label>
              <input name="confirmpass" onChange={handleChange} required id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="passwordConfirmation">Your Address *</label>
              <input onChange={handleChange} required id="text" type="text" name='address' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="passwordConfirmation">Blood Group</label>
              <select required defaultValue="" onChange={handleChange} name='group' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option value="A+">Select One </option>
                <option value="A+">A+</option>
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

            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="passwordConfirmation">Age</label>
              <input onChange={handleChange} id="date" type="number" name='age' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="passwordConfirmation">Last Donation (month) * </label>
              <input onChange={handleChange} id="textarea" type="text" name="lastdonation" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="passwordConfirmation">Facebook Account Link * </label>
              <input required onChange={handleChange} id="textarea" type="text" name="facebook" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-dark dark:text-gray-200" htmlFor="passwordConfirmation">Phone Number </label>
              <input onChange={handleChange} id="textarea" type="text" name="phone" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span class="font-medium">{error}</span> 
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Create Account </button>
          </div>
        </form>
      </section>
    </div>

  );

}


export default SignUp;



