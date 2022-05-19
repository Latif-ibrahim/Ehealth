import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Register() {
  return (
    <div>
      <NavBar/>
      <form>
  <div className="container-1">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          
          
    

    <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
        
          

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <div className="clearfix-1">
      <button type="button-1" className="cancelbtn-1">Cancel</button>
      <button type="submit" className="signupbtn-1">Sign Up</button>
    </div>
      </div>
      <div className="container">
    <span className="paaa">I Already have an account<Link to="/login">Login</Link></span>
        </div>
      </form>
      </div>
  );
}

export default Register;
