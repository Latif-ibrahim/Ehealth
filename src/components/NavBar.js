import { Link } from 'react-router-dom'
import React, { useContext, useState, useEffect } from "react";
import { AuthContext, AuthContextProvider } from "../context/auth.context";
import { AdminContext } from "../context/user.context";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
  );
  
  const navigate = useNavigate();
    const { success, loading, user, authLogout } = useContext(AuthContext)

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user]);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="#">Admin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">NavBar
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
                  </ul>
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                          <a class="nav-link" href="#">
                              <FaUser />
                              {user ? user.username : ""}
                          </a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" type="button"
                              onClick={() => authLogout()}
                          href="/"><FaSignOutAlt/></a>
                      </li>
                  
                  </ul>
                  
                      
      </div>
    </div>
</nav>
 )
 
}


export default NavBar
