import React from 'react'
import{ Link} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function DoctorLogin() {
    return(
      <div>
        <NavBar />
         
<div class="container-2">

          <div className="banner">
          <h1>STAFF ONLY</h1>
        </div>
          <p>Please enter your Staff ID and password below.</p>
          <hr />
          
          <label for="text"><b>Staff Id</b></label>
    <input type="text" placeholder="Staff Id" name="text" required />
   
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Password" name="psw-2" required />

    <div className="clearfix-2">
      <button type="submit" className="signinbtn-2"><Link to="/home">SignIn</Link></button>
    </div>
      </div>
      
  </div>
  )
}

export default DoctorLogin