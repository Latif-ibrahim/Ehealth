import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function DrugDelivery() {
  return (

    <section>
      <NavBar/>
    <div>
        <div className='banner-2'>
          
          
        <a href='Tel'>Main Line. +233 (0) 241-650-140</a>
        <a href='Tel'>WhatsApp No. +233 (0) 241-650-140</a>

</div>
        
    <div className='banner'>
          <h1>Deliver Medicine At Your Doorstep</h1>
          </div>
<div className='van'>
        <div className='van-1'>
                      <h2>WE DELIVER MEDICINE AT YOUR DOORSTEP</h2>
                      <hr/>
    </div>
              
           <div className='van-wrap'>
                  
        <img src="pics/van.jpg" alt="images"/>
                      <p>You can now order your prescription drugs from anywhere and it will be delivered to your your location after<br/>
                    booking with us below.</p>
          </div>
          
          <div className="vann">
<p>Schedule online. It's easy, fast and secure.</p>   
<button className='btn-contain' onClick={() => ("/")}>Book A Drug Delivery appointment</button>     
        </div>
    <hr/>
    
    </div>
    
    </div> 
  <Footer/>
   </section>
    
  )
}

export default DrugDelivery