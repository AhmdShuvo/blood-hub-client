import React, { useState } from 'react';
import $ from "jquery";
import "./Login.css"
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState()
    const [passcode, setPasscode] = useState()

    const handleSubmit = (e) => {
        const loginData = {email, passcode}
        console.log(loginData);
        
        e.preventDefault()
    }



    return (
        <div id='body'>
              <div className="main">  	
        <input type="checkbox" id="chk" />
        <div className="signup">
          <form>
            <label className='label-login' htmlFor="chk" >Sign up</label>
            <input className='input' type="text" name="txt" placeholder="User name" required />
            <input className='input' type="email" name="email" placeholder="Email" required />
            <input className='input' type="password" name="pswd" placeholder="Password" required />
            <button className='button'>Sign up</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label className='label-login' htmlFor="chk" hidden="true">Login</label>
            <input className='input' type="email" name="email" placeholder="Email" required />
            <input className='input' type="password" name="pswd" placeholder="Password" required />
            <button className='button' >Login</button>
          </form>
        </div>
      </div>
        </div>

        
    );
};

export default Login;