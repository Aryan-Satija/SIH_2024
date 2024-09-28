import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import KYC from './components/KYC'
import Transfer from "./components/Transfer"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Section/>
      <KYC/>
      <Transfer/>
    </div>
  )
}

export default App
