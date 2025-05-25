import React from 'react'

function Details() {
    return (
      <div className='container mx-auto px-6 md:px-20 py-4 mb-10 relative'>
        <h1 className='text-3xl font-bold text-center mt-6 mb-6'>Blogs Register</h1>
        <h1 className='text-2xl font-bold text-center mb-6'>Your New</h1>
        <div className='flex justify-center'>
          <form className='w-full max-w-md'>
            <input className='w-full p-4 border border-gray-300 rounded-md mb-4' type="text" placeholder='Name' />
            <input className='w-full p-4 border border-gray-300 rounded-md mb-4' type="email" placeholder='Email' />
            <input className='w-full p-4 border border-gray-300 rounded-md mb-4' type="text" placeholder='Subject' />
            <textarea className='w-full p-4 border border-gray-300 rounded-md mb-4 h-32' placeholder='Message'></textarea>
            <div className='text-center'>
              <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors' type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

export default Details
