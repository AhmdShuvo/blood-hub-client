import React from 'react';
import'./Login.css';
const ContactUs = () => {

// 	var NewComponent = React.createClass({
//   render: function() {
    return (
      <div className='body1'>
        <title>Slide Navbar</title>
        <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
        <div className="main">  	
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form>
              <label className="signclr" htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="text" name="txt" placeholder="User name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="pswd" placeholder="Password" required />
              <button className='signclr2'>Sign up</button>
            </form>
          </div>
          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="pswd" placeholder="Password" required />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
//   }
// });










		}


export default ContactUs;



