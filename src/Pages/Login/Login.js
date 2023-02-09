import React, { useState } from 'react';
import { Link , useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'



const Login = () => {
	const { user,Login, setIsLoadng,} = useAuth()
	const [logInData, setData] = useState({})
	const [err,setError]=useState('')

	
	const location = useLocation()
	const history = useNavigate()

	const handleChange = e => {
		const field = e.target.name
		const value = e.target.value
		const newLogindata = { ...logInData }
		newLogindata[field] = value;
		setData(newLogindata)
		
	
	
	  }
	
	  const handleLogin = e => {
		e.preventDefault()
	
		Login(logInData.email, logInData.password).then((userCredential) => {
		  // Signed in 
		  setIsLoadng(false);
		  const user = userCredential.user;
		  history('/service')
	
		  // ...
		})
		  .catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			setError(errorMessage)
		  }).finally(() => {
	
	
		  });
	  }

    return (
        <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Col */}
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{backgroundImage: 'url("./images/bloodhublogo.jpg")'}} />
            {/* Col */}
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form onSubmit={handleLogin} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                    Email
                  </label>
                  <input onChange={handleChange} name="email" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email Address" />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <input onChange={handleChange} name="password" className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  {err&& <p className="text-xs italic text-red-500">Please choose a password.</p>}
                </div>
                <div className="mb-4">
                  <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                  <label className="text-sm" htmlFor="checkbox_id">
                    Remember Me
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button  className="w-full px-4 py-2 font-bold text-white bg-red-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link to={'/signup'} className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" >
                    Create an Account!
                  </Link>
                </div>
                <div className="text-center">
                  <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;