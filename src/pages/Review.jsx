import React from 'react'
import Reviewcard from '../compoents/Reviewcard'

export default function Review() {
  return (
   <div id="rr" className=' text-white md:flex md:justify-center items-center flex-col mt-20 md:mt-50 '>
        <div className='text-center' >
          <h1 className=' text-5xl md:text-6xl font-black ' >CHAMPIONS <span className='text-red-500'>SPEAK</span></h1>
          <p className='text-center text-md md:text-lg mt-5'>Real athletes. Real results. Real power.</p>
        </div>
        <Reviewcard/>
        

    </div>
  )
}
