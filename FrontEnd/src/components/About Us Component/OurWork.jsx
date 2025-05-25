import React from 'react'
import teamImg from '../../assets/ourTeam.png'
import aboutImg from '../../assets/why-we-started.png'
const OurWork = () => {
  return ( 
    <>
    <div className="container mx-auto px-6 md:px-20 mt-6 mb-2">
        <div className="our-team mb-4">
            <div className="md:flex">
                <div className='md:w-[50%] md:pt-[7.5rem]'>
                    <h2 className="text-xl font-bold">Our Team of Creatives</h2>
                    <h3 className="text-lg font-semibold">Meet the talented individuals behind our blog, passionate about creating engaging content.</h3>
                    <p className="text-md">Our team of creatives is dedicated to crafting engaging content that resonates with our audience. With a passion for storytelling and a keen eye for detail, we strive to inspire and educate through our blog.</p>
                </div>
                <div className='md:w-[50%]'>
                    <img src={teamImg} alt="Our Team Image" />
                </div>
            </div>
        </div>
        <div className="why-we-started md:flex">
            <div className='md:w-[50%]'>
                <img src={aboutImg} alt="Our Team Image" />
            </div>
            
            <div className='md:w-[50%] md:pt-[9.5rem] md:pl-[3.5rem]'>
                <h2 className="text-xl font-bold">Why We Started This Blog</h2>
                <h3 className="text-lg font-semibold">Meet the talented individuals behind our blog, passionate about creating engaging content.</h3>
                    <p className="text-md">Our team of creatives is dedicated to crafting engaging content that resonates with our audience. With a passion for storytelling and a keen eye for detail, we strive to inspire and educate through our blog.</p>
            </div>        
        </div>
    </div>
    </>
  )
}

export default OurWork
