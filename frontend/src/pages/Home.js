import React from 'react'
import { Footer } from '../Components/Footer/Footer'
import { Landing } from '../Components/LandingBody/Landing'
import { Navbar } from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <Footer/>
    </div>
  )
}

export default Home