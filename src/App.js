import React from 'react'

import Home from './components/Home'
import Login from './screen/Login'
import Register from './screen/Register'

import { Routes, Route } from 'react-router-dom'
import About from './context/Partners'
import MedicalTeam from './context/MedicalTeam'
import MedicalConsult from './context/MedicalConsult'
import DrugDelivery from './context/DrugDelivery'
import LabServices from './context/LabServices'
import DoctorLogin from './context/DoctorLogin'

function App() {
  return (
    <>
     
      <div className="app">
        <Routes>
        
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />

          
          <Route path="/partiners" element={<About />} />
          <Route path="/medicalteam" element={<MedicalTeam />} />
          <Route path="/medicalconsult" element={<MedicalConsult />} />
          <Route path="/drugDelivery" element={<DrugDelivery />} />
          <Route path="/labServices" element={<LabServices />} />
          <Route path="/doctorLogin" element={<DoctorLogin />} />
        </Routes>
      </div>
     
    </>
  )
}

export default App
