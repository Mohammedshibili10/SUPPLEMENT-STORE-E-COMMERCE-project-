import React from 'react'
import Card from '../compoents/Card'

export default function Benfits() {
  return (
  <div className=' text-white md:flex flex-wrap justify-center items-center flex-col mt-30 md:mt-50 '>
        <div className='text-center' >
          <h1 className='text-5xl md:text-6xl font-black ' >WHY CHOOSE <span className='text-red-500'>VITALCORE</span></h1>
          <p className='text-center text-md md:text-lg mt-5'>Uncompromising quality for uncompromising athletes</p>
        </div>
            
            <div>
               <Card/>
            </div>

        


    </div>
  )
}
