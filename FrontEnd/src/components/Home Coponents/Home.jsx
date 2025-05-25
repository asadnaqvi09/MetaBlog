import React from 'react'
import Navbar from '../../components/constant/Navbar'
import HeroSection from '../Home Coponents/HeroSection'
import Ads from '../Home Coponents/Ads'
import Posts from '../Home Coponents/Posts'
import Footer from '../constant/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Ads />
      <Posts />
      <Footer />
    </>
  )
}

export default Home
