import React from 'react'
import Reviewline from './Reviewline'

export default function Reviewbars() {
  return (
    <div className=' px-5 md:px-10 lg:px-40'>
      <div className=' lg:w-400 lg:flex gap-50  border-2 border-gray-500 rounded-lg  p-10 '>
        <div className='flex gap-5 mt-7'>
          <div class="relative size-30 ">
            <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              {/* <!-- Background Circle --> */}
              <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200" stroke-width="2"></circle>
              {/* <!-- Progress Circle --> */}
              <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-red-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="20" stroke-linecap="round"></circle>
            </svg>

            {/* <!-- Percentage Text --> */}
            <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span class="text-center text-2xl font-bold text-red-600">4.5</span>
            </div>
          </div>
          <div className='mt-5 h-30'>
            <h1 className='text-red-500 text-3xl'>★★★★★</h1>
            <p className='text-white'>from 1.25k reviews</p>
          </div>
        </div>
         <Reviewline/>
      </div>
          
    </div>





  )
}
