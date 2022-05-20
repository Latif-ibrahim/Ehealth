import { Link } from 'react-router-dom'
import React from "react";
import { VscAccount } from "react-icons/vsc";



function NavBar() {
  return (
    <nav>
      <div className='sec'>
        <div className='nav-11'>
        <Link className='nav-0' to="/Login"><VscAccount /></Link>
      </div>
        <div className='nav-11'>
          <Link to="/login">Login</Link>
      </div>
      
    </div>
      <h2>Logo</h2>
      <ul>
      <li><Link to="/home">Home</Link></li>
      <div class="dropdown">
    <button className="dropbtn">About Us 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
            <Link to="/partiners">Our Partners</Link>
            <Link to="/medicalteam">Our Medical Team</Link>
            <Link to="/">Contact</Link>
    </div>
  </div>   
        <li><Link to="/">Health Packages</Link> </li>
        <div class="dropdown">
    <button className="dropbtn">Online Services 
      <i class="fa fa-caret-down"></i>
    </button>
          <div class="dropdown-content">
            <Link to="/medicalconsult">Online Medical Consultation</Link>
            <Link to="/DrugDelivery">Drug Delivery Services</Link>
            <Link to="/LabServices">Lab Services</Link>
      
    </div>
  </div> 
        <li><Link to="/DoctorLogin">Doctor's Login</Link></li>
        <li><a href="#"></a> </li>
        <div class="dropdown">
    <button className="dropbtn">Legal Notices 
      <i class="fa fa-caret-down"></i>
    </button>
          <div class="dropdown-content">
            <Link to="/">Notice Of Privacy Practice</Link>
            <Link to="/">Terms Of Use</Link>
    </div>
  </div> 
      </ul>
      
    </nav>
  )
 
}


export default NavBar
