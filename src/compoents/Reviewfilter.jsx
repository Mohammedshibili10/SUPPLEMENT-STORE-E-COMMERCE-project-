import React from 'react'
import Reviewlist from './Reviewlist'

export default function Reviewfilter() {
    return (
        <div className='md:flex gap-15 lg:gap-30 px-5 px-10 lg:px-40 mt-10'>
            <div className='border text-white w-80 h-160 border-gray-500 rounded-lg '>
                <div className='border-b border-gray-500 m-5 pb-4'>
                    <h1 className='text-white font-bold text-xl'>Reviews Filter</h1>
                </div>
                <div className='border-b border-gray-500 m-5 pb-4'>
                <h1 className='text-white text-lg font-medium mt-5 pl-5'>Rating</h1>
                <div className='text-white space-y-3 mt-4 px-5'>
                    <div>  <input className='w-4 h-4 ' type="checkbox" /> <span className='text-2xl text-red-500 '>★</span><span className='font-bold '> 1.5</span></div>
                    <div> <input className='w-4 h-4 ' type="checkbox" /> <span className='text-2xl text-red-500 '>★</span><span className='font-bold '> 2.5</span></div>
                    <div> <input className='w-4 h-4 ' type="checkbox" /> <span className='text-2xl text-red-500 '>★</span><span className='font-bold '> 3.5</span></div>
                    <div> <input className='w-4 h-4 ' type="checkbox" /> <span className='text-2xl text-red-500 '>★</span><span className='font-bold '> 4.5</span></div>
                    <div> <input className='w-4 h-4 ' type="checkbox" /> <span className='text-2xl text-red-500 '>★ </span><span className='font-bold '>4.9</span></div>
                </div>
            </div>
            <div>
            
                <h1 className='text-white text-lg font-medium mt-8 pl-5'>Review Topics</h1>
                <div className='text-white space-y-3 m-5 px-5'>
                    <div>  <input className='w-4 h-4 ' type="checkbox" /><span className='font-bold text-smpl-2 '>Product Quality</span></div>
                    <div> <input className='w-4 h-4 ' type="checkbox" /><span className='font-bold  text-sm pl-2'> Seller Service</span></div>
                    <div> <input className='w-4 h-4 ' type="checkbox" /><span className='font-bold  text-sm pl-2'> Product Service</span></div>
                    <div> <input className='w-4 h-4 ' type="checkbox" /><span className='font-bold  text-sm pl-2'> Shipment</span></div>
                    <div> <input className='w-4 h-4 ' type="checkbox" /> <span className='font-bold text-sm pl-2 '>Match with Description</span></div>
                </div>
            </div>
        </div>
         
        {/* REVIEW LIST */}
          <div>
         <div>
            <h1 className='text-xl font-bold text-white'>Review Lists</h1>
         </div>
         <div className='flex space-x-5 mt-5 '>
         <div className='w-25 h-10 text-sm border rounded-lg text-white text-center pt-2'>All Reviews</div>
         <div className='w-37 h-10 text-sm border rounded-lg text-white text-center pt-2'>With Photo & video</div>
         <div className='w-30 h-10 text-sm border rounded-lg text-white text-center pt-2'>With Description</div>
        </div>
          <Reviewlist/>
        </div>  
        </div>
    )
}
