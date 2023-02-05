import React from 'react';
import'./Login.css';
const Login = () => {

// 	var NewComponent = React.createClass({
//   render: function() {
    return (
      <div className='body1'>
     
      <div className="main-section">  	
        <input type="checkbox" id="chk"  />
        <div className="signup-page">
          <form>
            <label className='lebel-cls' htmlFor="chk" aria-hidden="true">Sign up</label>
            <input className='input-box' type="text" name="txt" placeholder="User name" required />
            <input className='input-box' type="email" name="email" placeholder="Email" required />
            <input className='input-box' type="password" name="pswd" placeholder="Password" required />
            <button className='button-design'>Sign up</button>
          </form>
        </div>
        <div className="login-page">
          <form>
            <label className='lebel-cls' htmlFor="chk" aria-hidden="true">Login</label>
            <input className='input-box' type="email" name="email" placeholder="Email" required />
            <input className='input-box' type="password" name="pswd" placeholder="Password" required />
            <button  className='button-design'>Login</button>
          </form>
        </div>
      </div>
    </div>

    
    );
//   }
// });










		}


export default Login;



