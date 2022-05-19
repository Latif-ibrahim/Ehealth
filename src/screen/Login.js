import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Login() {
  return (
    <div>
      <NavBar/>
      <h2>LogIn</h2>

<form>
  <div className="imgcon">
            <img src="pics/pa.jfif" alt="images" />
          </div>

  <div className="container">
          <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" required />

   
          <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required></input>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" /> Remember me
    </label>
  </div>

  <div className="container">
    <button type="button" className='cancelbtn'>Cancel</button>
    <span className="psw">Forgot <a href="register">password?</a></span>
        </div>
        <div className="container">
    <span className="paaa">I don't have an account<Link to="/register">Register</Link></span>
        </div>
        
</form>
</div>
  );
}

export default Login;