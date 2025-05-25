import React from 'react';
import heroImage2 from '../../assets/heroimage2.jpg';
import authorImage from '../../assets/author-image.png'

function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-20 py-4 mb-10 relative">
      <div className="hero-image">
        <img src={heroImage2} alt="Hero" className="h-[200px] md:h-[400px] rounded-lg w-full md:object-cover"/>
      </div>
      <div className='content hidden md:block md:w-[22rem] p-4 bg-white rounded-lg text-black absolute md:top-52 md:left-32 shadow-2xl'>
        <h4 className='text-white text-xs sm:text-sm font-bold uppercase p-2 bg-[#4B6BFB] rounded-md w-[120px] text-center'>Technology</h4>
        <h2 className='text-xl sm:text-2xl font-bold mt-2'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
        <div className="author-details flex flex-wrap items-center mt-4 gap-2 text-sm sm:text-base">
          <div className="author-image w-8 h-8 sm:w-10 sm:h-10">
            <img src={authorImage} alt="Author" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="author-name text-slate-800">Jason Fransisco</div>
          <div className="date text-slate-800">August 20, 2024</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;