import React, { useState } from 'react';
import $ from "jquery";
import "./Login.scss"
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
        <div>
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div className="login-form-container" id="container">
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" 
                        name= "email"
                        onChange = {(e) => setEmail(e.target.value) }
                        placeholder="Email" required/>
                        <input type="password"
                        onChange = {(e) => setPasscode(e.target.value) }
                        required
                        placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <Link to="/signup"><button className="ghost" id="signUp" >Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;