import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function Contact() {
    return (
      <section>
      <NavBar />
      <div>
        <div className="banner-2">
          <a href="Tel">Main Line. +233 (0) 241-650-140</a>
          <a href="Tel">Mobile. +233 (0) 246-189-123</a>
          <a href="Tel">WhatsApp No. +233 (0) 241-650-140</a>
        </div>

        <div className="banner">
          <h1>Online Medical Consultancy Services</h1>
        </div>
        <div className="ban">
          <div className="banner-1">
            <h2>
              CONNECT FACE TO FACE USING YOUR PHONE, TABLET OR <br />
              COMPUTER, 24/7.
            </h2>
            <p>
              Just like an in-person visit, the doctor takes your history and
              <br /> symptoms, performs an exam and may recommend treatment -{' '}
              <br />
              including prescriptions and lab work​
            </p>

            <div className="action">
              <p>Schedule online. It's easy, fast and secure.</p>
              <button className="btn-contain-2" onClick={() => '/'}>
                Book an appointment
              </button>
            </div>
          </div>

          <div className="actions-wrap">
            <img src="pics/1.png" alt="images" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact