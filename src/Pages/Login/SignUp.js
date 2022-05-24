import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [passcode, setPasscode] = useState()

    const handleSubmit = (e) => {
        const signUpData = {name, email, passcode}
        console.log(signUpData);
        
        e.preventDefault()
    }
    return (
        <div>
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div className="login-form-container right-panel-active" id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#f" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#g" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#l" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text"
                        name = "name"
                        onChange = {(e) => setName(e.target.value)}
                        placeholder="Name" required/>

                        <input type="email"
                        name = "email"
                        onChange = {(e) => setEmail(e.target.value)}
                        placeholder="Email" required/>

                        <input type="password"
                        name="passcode"
                        onChange = {(e) => setPasscode(e.target.value)}
                        placeholder="Password" required/>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <Link to="/login"><button className="ghost" id="signUp" >Sign In</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;