import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TiInfoLarge } from "react-icons/ti";
export default function Contact() {
  return (
    <div>
        <div className='text-white flex flex-col justify-center items-center mt-20 '>
        <div className=' flex flex-col justify-center items-center mt-10 mb-10 '>
            <h1 className='text-5xl font-bold'>Contact Us</h1>
            <p className='text-lg '>Any qusetions or remarks ? just write us message !</p>
        </div>
        <div className='w-80   '>
            <div className='flex justify-center items-center gap-5  '>
              <div>
            <label className='ml-' >Email</label>
            <input className='border-2 border-gray-500 w-90 h-10 rounded-lg bg-white text-gray-500 pl-5 ' type="text"  placeholder='Enter a vaild email address' /><br/>
            </div>
            
            <div>
            <label className='' >Name</label>
            <input className='border-2 border-gray-500  w-90 h-10 rounded-lg bg-white text-gray-500 pl-5 ' type="text"  placeholder=' Enter your name'/>
            </div>

            </div>
            <br/>
            <button className='w-80 h-10 border font-bold mt-5 bg-red-500 rounded-full'>SUBMIT</button>
        </div>
       </div>
       <div className='w-full bg-[#282929]  h-70 mt-70 flex justify-center items-center '>
        <div className='bg-red-500 w-400 h-60 mb-50  rounded-lg border-2 border-white '>
             <div className=' flex justify-around items-center -translate-y-22 '>
              <div className='w-40 h-40 bg-[#282929] border-2 border-white rounded-full '><TiInfoLarge className='w-20 h-20 m-10 fill-red-500'  /></div>
              <div className='w-40 h-40 bg-[#282929] border-2 border-white rounded-full '><FaPhoneAlt className='w-15 h-15 m-12 text-red-500'/></div>
              <div className='w-40 h-40 bg-[#282929] border-2 border-white rounded-full '><IoLocationOutline className='w-20 h-20 m-10 text-red-500' /></div>
           </div>
           <div className=' flex justify-center gap-89  items-center  text-white -translate-y-18  '>
            <div className='text-center  '>
                <h1 className='text-2xl font-bold '>ABOUT</h1>
                <p className=' '>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className='text-center'>
                <h1 className='text-2xl font-bold '>PHONE</h1>
                <p>+91987456123</p>
                <p>+91987456123</p>
                </div>
                <div>
                <h1  className='text-2xl font-bold '>OUR STORE LOCATION</h1>
                <p>first floor,second state ,london 123</p>
                </div>
             </div>
        </div>
       </div>

    </div>
  )
}
