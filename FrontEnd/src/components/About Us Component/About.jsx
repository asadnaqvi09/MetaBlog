import React from 'react'
import Navbar from '../../components/constant/Navbar'
import aboutimg from '../../assets/About-Us Banner.png'
import VisionandMission from './VisionandMission'
import OurWork from './OurWork'
import Footer from '../../components/constant/Footer'

function About() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-6 md:px-20 py-4' >
        <div className='flex px-32 gap-4 pt-10 relative'>
          <div className="aboutus w-[22rem] bg-white rounded-lg shadow-2xl  px-8 py-9 h-[12rem]">
            <h4 className='text-xl text-slate-800  font-medium'>About Us</h4>
            <h1 className='text-2xl font-bold'>We are a team of content writers who share their learnings</h1>
          </div>
          <div className="aboutpara pt-8 text-sm md:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non repellendus sit magni, dicta nisi fuga nostrum voluptates deleniti soluta molestiae labore ipsam cum veniam. Vel autem consequuntur officia quaerat.</div>
        </div>
        <img src={aboutimg} alt="this is about image banner" />
      </div>
      <VisionandMission />
      <OurWork />
      <Footer />
    </>
  )
}

export default About
