import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function LabServices() {
  return (
    <section>
      <NavBar/>
    <div>
        <div className='banner-2'>
          
          
        <a href='Tel'>Main Line. +233 (0) 241-650-140</a>
        <a href='Tel'>WhatsApp No. +233 (0) 241-650-140</a>

</div>
        
    <div className='banner'>
          <h1>HOME SAMPLE COLLECTION SERVICES</h1>
          </div>
<div className='ban'>
        <div className='lab-1'>
        <h2>Mobile Lab Samples Collection Services</h2>
          <p>Whether the required service is home health, long term care, assisted<br/> living, nursing home, special needs, hospice or just routine lab work to</p>
           <p>your home or business; Our Mobile Lab Services  hires experienced<br/> technicians who always arrive on time; to collect the Lab samples for</p>
            <p>the lab while you continue with your busy schedule. </p>
            <div className="action">
<p>Schedule online. It's easy, fast and secure.</p>   
<button className='btn-contain' onClick={() => ("/")}>Book an appointment</button>  
        </div>
    </div>
        
                <div className='lab-wrap'>        
        <img src="pics/lab.webp" alt="images"/>
  
          </div>
    </div> 
      </div> 
      <Footer/>
    </section>
  )
}

export default LabServices